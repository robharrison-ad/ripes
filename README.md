# NgxRipe
### Angular pipes for projects using Angular 2+


|  Pipe Name  |  What it does | Usage Example | result |
|-------------|---------------|-----------------------------------------------|---------------|
| rmbgb pipe  | Convert a number to bytes, KB, MB, GB, or TB. | `<div> {{ n  rmbgb }} </div>` | (if n = 123456789): `123.46 MB` |
| | | | (if n = 1234567890123456789): `1,234,567.89 TB`


`<div *ngFor="let num of testNumberArray | rOrderBy">{{ num }}</div>'


## rOrderBy

Sorts arrays by specified key or by value for arrays of primitive data types.

#### Usage Examples

Sort an array of numbers
`*ngFor="let n of numberArray | rOrderBy"`

Sort an object Array where object array is as below:
`[0]: {
  "a": 1,
  "b": 2,
  "c": {
    "d": 3,
    "e": 5,
    "f": {
      "g": 6,
      "h": 7
    }
  }
}`
`[1]: {
  "a": 8,
  "b": 9,
  "c": {
    "d": 10,
    "e": 11,
    "f": {
      "g": 12,
      "h": 13
    }
  }
}`
`[2]: {
  "a": 0,
  "b": -1,
  "c": {
    "d": -2,
    "e": -3,
    "f": {
      "g": -4,
      "h": -5
    }
  }
}`

We can sort by first-level element, such as objectArray[0].a:
`*ngFor="let o of objectArray | rOrderBy:'a'"`

We can sort by deeper elements:
`*ngFor="let o of objectArray | rOrderBy:'a.f.g'`

We can sort by dates, integers, strings, boolean, etc.   Using an array of project objects as an example here:
```
{
  "project": "project 1",
  "projectManager": {
    "firstName": "Billy",
    "lastName": "Borman"
  },
  "projectId": 124,
  "projectDue": "1/6/2013",
  "projectComplete": false
}
```

`*ngFor="let p of projectsArray | rOrderBy:'projectManager.lastName'"`
or... 
`*ngFor="let p of projectArray | rOrderBy:'projectDue'"`
or...
`*ngFor="let p of projectArray | rOrderBy:'projectComplete'"`

More complete usage example:
```
<div *ngFor="let obj of testObjectArrayTwo | rOrderBy:'projectComplete'">{{ obj | json }}</div>
```
