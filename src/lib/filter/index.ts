export enum Action {
    Number = 'NUM',
    String = 'STR',
    Date = 'DATE',
};

export enum Operation {
    Eq = '=',
    Neq = '!=',
    Gt = '>',
    Gte = '>=',
    Lt = '<',
    Lte = '<=',
    Range = '<>',
    Contains = '~',
    Regex = '$',
    In = 'IN',
};

export type Payload<A extends Action = Action> =
    A extends Action.Number ? number :
    A extends Action.String ? string :
    A extends Action.Date ? Date :
    never;

/**
 * ### Serialize
 *
 * ```typescript
 * const filter = new Filter(Action.Number, Operation.Gt, 10);
 *
 * filter.toString();   // 'NUM|>|10'
 * ```
 *
 * ### Deserialize
 *
 * ```typescript
 * const filter = Filter.parse('NUM|>|10', Action.Number);
 *
 * filter.action;       // Action.Number
 * filter.operation;    // Operation.Gt
 * filter.payload;      // [10]
 *
 * Filter.parse('NUM|>|10', Action.Date);
 * // Error: Expected action DATE but got NUM
 *
 * Filter.parse('NUM|>|Hello World', Action.Number);
 * // Error: Invalid number payload: Hello World
 *
 * Filter.parse('NUM|>|10', Action.Number, [1, 2, 3]);
 * // Error: Invalid option: 10
 * ```
 */
export class Filter<A extends Action = Action> {
    action: A;
    operation: Operation;
    payload: Payload<A>[];

    constructor(
        action: A,
        operation: Operation,
        ...payload: Payload<A>[]
    ) {
        this.action = action;
        this.operation = operation;
        this.payload = payload;
    }

    get ok(): boolean {
        return this.operation === Operation.Range
            ? this.payload.length > 1
            : this.payload.length > 0;
    }

    as(f: (payload: Payload<A>) => Payload<A>): Filter<A> {
        return new Filter(
            this.action,
            this.operation,
            ...this.payload.map(f),
        );
    }

    toString(): string {
        return this.action
            + "|" + this.operation
            + "|" + this.payload.map(
                (p) => p instanceof Date ? p.toISOString() : p.toString()
            ).join('|');
    }

    /**
     * @throws {Error}
     */
    static parse<A extends Action = Action>(
        str: string,
        action?: A,
        allowed?: Payload<A>[]
    ): Filter<A> {
        const [_action, operation, ...raw] = str.split('|');
        const payload: Payload[] = raw;

        if (!_action || !operation || !payload.length) {
            throw new Error('Invalid filter string');
        }

        if (action && _action !== action) {
            throw new Error('Expected action ' + action + ' but got ' + _action);
        }

        switch (_action) {
            case Action.Number:
                raw.forEach((p, i) => {
                    if (
                        !/^-?(\d_?)+$|^-?(\d_?)*\.(\d_?)+$/.test(p)
                    ) {
                        throw new Error('Invalid number payload: ' + p);
                    }

                    payload[i] = Number(p);

                    if (allowed && !allowed.some((p) => p === payload[i])) {
                        throw new Error('Invalid option: ' + p);
                    }
                })
                break;

            case Action.Date:
                raw.forEach((p, i) => {
                    if (
                        !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/.test(p)
                    ) {
                        throw new Error('Invalid date payload: ' + p);
                    }

                    payload[i] = new Date(p);

                    if (allowed && !allowed.some((p) => p === payload[i])) {
                        throw new Error('Invalid option: ' + p);
                    }
                });
                break;

            case Action.String:
                if (allowed) {
                    raw.forEach((p, i) => {
                        if (!allowed.some((p) => p === payload[i])) {
                            throw new Error('Invalid option: ' + p);
                        }
                    });
                }
                break;

            default:
                throw new Error('Unknown action: ' + _action);
        }

        return new Filter(
            _action as A,
            operation as Operation,
            ...payload as Payload<A>[],
        );
    }
}
