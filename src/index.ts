import browserDetails from './utils/browser';
import { OriginalReport, Report, Reports } from './report';
import {
  AudioInputReports,
  AudioOutputReports,
  AudioInputLegacyReports,
  AudioOutputLegacyReports,
} from './simple-reports/audio';
import {
  VideoInputReports,
  VideoOutputReports,
  VideoInputLegacyReports,
  VideoOutputLegacyReports,
} from './simple-reports/video';
import {
  CandidatePairReports,
  CandidatePairLegacyReports,
} from './simple-reports/pair';

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
};

export {
  VideoInputReports,
  VideoOutputReports,
  VideoInputLegacyReports,
  VideoOutputLegacyReports,
};

export {
  CandidatePairReports,
  CandidatePairLegacyReports,
};

/**
 * Get stats of peerconnection / 获取 peerconnection 的状态信息
 *
 * @param pc A peerconnection object / 需要获取状态的 peerconnection 对象
 * @returns A collection of formatted reports from original getStats of peerconnection / 一组通过 peerconnection 原生 getStats 方法获取的数据的格式式报告
 *
 * @example
 * ```
 * getStats(pc)
 *  .then((originalReports: Array<OriginalReport>) => {
 *    let report: CandidatePairReports = new CandidatePairReports(originalReports);
 *    console.log(report.currentRoundTripTime);
 *    ...
 *  })
 *  .catch(err => {
 *    ...
 *  });
 * ```
 */
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

/**
 * Get stats of peerconnection / 获取 peerconnection 的状态信息
 *
 * @param pc A peerconnection object / 需要获取状态的 peerconnection 对象
 * @returns A collection of formatted reports from original getStats of peerconnection / 一组通过 peerconnection 原生 getStats 方法获取的数据的格式式报告
 *
 * @example
 * ```
 * getLegacyStats(pc)
 *  .then((originalReports: Array<OriginalReport>) => {
 *    let report: CandidatePairReports = new CandidatePairReports(originalReports);
 *    console.log(report.currentRoundTripTime);
 *    ...
 *  })
 *  .catch(err => {
 *    ...
 *  });
 * ```
 */
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

/**
 * The version of AudioTrackMixer
 *
 * @example
 * ```
 * import { version } from 'audio-track-mixer';
 * ```
 */
//@ts-ignore
const version: string = __VERSION__;

export { version };

export default getStats;
