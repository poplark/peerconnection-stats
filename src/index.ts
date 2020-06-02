import { OriginalReport, Report, Reports } from './report';
import browserDetails from './utils/browser';

export {
  OriginalReport,
  Report,
  Reports
};

export {
  AudioInputReports,
  AudioOutputReports,
  AudioInputLegacyReports,
  AudioOutputLegacyReports,
  VideoInputReports,
  VideoOutputReports,
  VideoInputLegacyReports,
  VideoOutputLegacyReports,
  CandidatePairReports,
  CandidatePairLegacyReports,
} from './simple-reports/index';

export function getStats(pc: RTCPeerConnection): Promise<Array<OriginalReport>> {
  return pc.getStats().then((reports: RTCStatsReport) => {
    const result = [] as Array<OriginalReport>;
    reports.forEach(report => {
      const originalReport = new Map() as OriginalReport;
      for(const key in report) {
        originalReport.set(key, report[key]);
      }
      result.push(originalReport);
    });
    return result;
  });
}

export function getLegacyStats(pc: RTCPeerConnection): Promise<Array<OriginalReport>> {
  if (browserDetails.browser !== 'chrome') {
    return Promise.reject(new Error('Only chrome/chromium style browsers can use this function'));
  }
  return new Promise((resolve, reject) => {
    const result = [] as Array<OriginalReport>;
    (pc as any).getStats(function(response) {
      response.result().forEach(report => {
        const originalReport = new Map() as OriginalReport;
        originalReport.set('id', report.id);
        originalReport.set('type', report.type);
        report.names().forEach((name: string) => {
          originalReport.set(name, report.stat(name));
        });
        result.push(originalReport);
      });
      resolve(result);
    }).catch(reject);
  });
}

export default getStats;
