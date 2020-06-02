import { isUndefined } from './utils/type';
import { parse } from './utils/parser';

export type OriginalReport = Map<string, string | number | boolean>;

export interface Report {
  key: string;
  value: string | number | boolean;
  origin: OriginalReport;
}

export class Reports {
  private originalReports: Array<OriginalReport>;

  constructor(originReports: Array<OriginalReport>) {
    this.originalReports = originReports;
  }

  /**
   * Search part of reports with some condition / 从状态报告中搜索出满足条件的状态数据
   * @param key The primary search key of the report / 搜索的关键字
   * @param condition The condition of searching / 搜索的条件
   * @returns Groups of searching result / 一组匹配的搜索结果
   * 
   * @example
   * ```
   * const result: Array<Report> = reports.find('bytesSent', { type: 'candidate-pair' });
   * result.forEach((item: Report) => {
   *   console.log(item.value);
   * });
   * ```
   */
  find(key: string, condition?: {
    [key: string]: string | number | boolean;
  }): Array<Report> {
    const result = [] as Array<Report>;
    this.originalReports.forEach((report: OriginalReport) => {
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

  /**
   * Search an numberic report / 搜索出某个数值型的状态报告
   * @param key The primary search key of the report / 搜索的关键字
   * @param condition The condition of searching / 搜索的条件
   * @returns An number result which equal or great than 0, or -1 when no searching result / 搜索出第一个匹配结果的数值，找不到匹配项时，返回 -1
   */
  protected _find(key: string, condition?: {[key: string]: string | number | boolean}): number {
    const result: Array<Report> = this.find(key, condition);
    if (result[0]) {
      return parse('' + result[0].value) as number;
    }
    return -1;
  }
}
