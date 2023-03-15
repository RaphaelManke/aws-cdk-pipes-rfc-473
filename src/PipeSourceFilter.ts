export interface IPipeFilterPattern {
  pattern: string;
}

export interface IPipeSourceFilter {
  filters: IPipeFilterPattern[];
}

export class PipeGenericFilterPattern {
  static fromJson(patternObject: Record<string, any>): IPipeFilterPattern {
    return { pattern: JSON.stringify(patternObject) };
  }
}

export class PipeSourceFilter implements IPipeSourceFilter {
  public filters: IPipeFilterPattern[];


  constructor(filter: IPipeFilterPattern[]) {
    this.filters = filter;
  }

  public toString(): string {
    return JSON.stringify(this.filters);
  }
}
