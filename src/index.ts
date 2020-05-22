import { OriginalReport } from './report';

export function getStats(pc: RTCPeerConnection): Promise<Array<OriginalReport>> {
  return pc.getStats().then((reports: RTCStatsReport) => {
    const result = [] as Array<OriginalReport>;
    reports.forEach(report => {
      const originalReport = new Map() as OriginalReport;
      for(let key in report) {
        originalReport.set(key, report[key]);
      }
      result.push(originalReport);
    });
    return result;
  });
}

export function getLegacyStats(pc: RTCPeerConnection): Promise<Array<OriginalReport>> {
  return new Promise((resolve, reject) => {
    const result = [] as Array<OriginalReport>;
    (pc as any).getStats(function(response) {
      response.result().forEach(report => {
        const originalReport = new Map() as OriginalReport;
        originalReport.set('id', report.id);
        originalReport.set('type', report.type);
        report.names().forEach(name => {
          originalReport.set(name, report.stat(name));
        });
        result.push(originalReport);
      });
      resolve(result);
    }).catch(reject);
  });
}