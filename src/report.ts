import { isUndefined } from './utils/type';
// import { parse } from './parser';

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

  find(key: string, condition?: {
    [key: string]: string | number | boolean;
  }): Array<Report> {
    const result = [] as Array<Report>;
    this.originReports.forEach((report: OriginalReport) => {
      let flag = true;
      if (condition) {
        for (const key in condition) {
          if (isUndefined(condition[key])) {
            flag = report.has(key);
          } else {
            flag = condition[key] === report.get(key);
          }
          if (!flag) break;
        }
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
