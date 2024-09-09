# Filter

A field filter parser and validator

## Usage

### Serialize

```typescript
const filter = new Filter(Action.Number, Operation.Gt, 10);

filter.toString();   // 'NUM|>|10'
```

### Deserialize

```typescript
const filter = Filter.parse('NUM|>|10', Action.Number);

filter.action;       // Action.Number
filter.operation;    // Operation.Gt
filter.payload;      // [10]

Filter.parse('NUM|>|10', Action.Date);
// Error: Expected action DATE but got NUM

Filter.parse('NUM|>|Hello World', Action.Number);
// Error: Invalid number payload: Hello World

Filter.parse('NUM|>|10', Action.Number, [1, 2, 3]);
// Error: Invalid option: 10
```
