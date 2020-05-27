/**
 * load sample's data as mock data
 */
const yaml = require('yaml');
const chromeIn = require('../../samples/chrome-in.yml');
const chromeOut = require('../../samples/chrome-out.yml');
const chromeInLegacy = require('../../samples/chrome-in-legacy.yml');
const chromeOutLegacy = require('../../samples/chrome-out-legacy.yml');
const firefoxIn = require('../../samples/firefox-in.yml');
const firefoxOut = require('../../samples/firefox-out.yml');
const safariIn = require('../../samples/safari-in.yml');
const safariOut = require('../../samples/safari-out.yml');

import { OriginalReport } from '../../src/report';

function convert2OriginalReport(mockData: string): Array<OriginalReport> {
  let result = [];
  try {
    const reports = yaml.parse(mockData).Reports;
    reports.forEach(report => {
      const oReport: OriginalReport = new Map();
      oReport.set('id', report.id);
      oReport.set('type', report.type);
      (report.stats || []).forEach(stat => {
        oReport.set(stat.name, stat.value);
      });
      result.push(oReport);
    });
  } catch(err) {
    console.error('convert2OriginalReport ', err);
  }
  return result;
}

const chromeInOriginalReports = convert2OriginalReport(chromeIn);
const chromeOutOriginalReports = convert2OriginalReport(chromeOut);
const chromeInLegacyOriginalReports = convert2OriginalReport(chromeInLegacy);
const chromeOutLegacyOriginalReports = convert2OriginalReport(chromeOutLegacy);
const firefoxInOriginalReports = convert2OriginalReport(firefoxIn);
const firefoxOutOriginalReports = convert2OriginalReport(firefoxOut);
const safariInOriginalReports = convert2OriginalReport(safariIn);
const safariOutOriginalReports = convert2OriginalReport(safariOut);

export {
  chromeInOriginalReports,
  chromeOutOriginalReports,
  chromeInLegacyOriginalReports,
  chromeOutLegacyOriginalReports,
  firefoxInOriginalReports,
  firefoxOutOriginalReports,
  safariInOriginalReports,
  safariOutOriginalReports
}
