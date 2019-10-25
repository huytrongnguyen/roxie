export type Condition = {
  type: string,
  key: string,
  value: string,
}

export class Query {
  fields: string[];
  table: string;
  condition: Condition;

  static parse(queryString: string) {
    const re = (/^select (.*?) from (\w+)\s+where (.*)$/i).exec(queryString);
    const query = new Query();
    query.fields = re[1].split(',');
    query.table = re[2];
    query.condition = query.parseWhere(re[3]);
    return query;
  }

  private parseWhere(whereClause: string) {
    const re = (/^\s*(\w+)\s*=\s*(.*)\s*$/i).exec(whereClause);
    if (!re) return null;

    const key = re[1],
          value = re[2];

    if (/^(["'])(?:\\?.)*?\1$/.test(value)) {
      return { type: 'string', key, value: value.replace(/"/g, '') }
    } else if (/^\d+\.?\d*$/.test(value)) {
      return { type: 'number', key, value }
    } else {
      return { type: 'unknown', key, value }
    }
  }
}