export type GenericItem<Id, Type = null> = Type extends null ? {
  id: Id
  description: string
} : {
  id: Id
  type: Type
  description: string
}
