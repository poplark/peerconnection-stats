import { isUndefined } from './utils/type';
// import { parse } from './parser';

export interface Condition {
  key: string;
  value?: string | number | boolean;
}

export type OriginalReport = Map<string, string | number | boolean>;

export interface Report {
  key: string;
  value: string | number | boolean;
  origin: OriginalReport;
}

export class Reports {
  private originReports: Array<OriginalReport>;

  constructor(originReports: Array<OriginalReport>) {
    this.originReports = originReports;
  }

  find(key: string, conditions?: Array<Condition>): Array<Report> {
    const result = [] as Array<Report>;
    this.originReports.forEach((report: OriginalReport) => {
      let flag = true;
      if (conditions) {
        conditions.forEach((condition: Condition) => {
          if (!flag) return;
          if (isUndefined(condition.value)) {
            flag = report.has(condition.key);
          } else {
            flag = condition.value === report.get(condition.key);
          }
        });
      }
      if (flag && report.has(key)) {
        result.push({
          key,
          value: report.get(key) as (string | number | boolean),
          origin: report
        });
      }
    });
    return result;
  }
}
