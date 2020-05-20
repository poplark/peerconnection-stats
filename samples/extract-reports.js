// extract standard reports
function standard(reports) {
  let result = 'Reports:';
  reports.forEach(report => {
    if (report.type !== 'codec') {
      let p = `
  - RTCStatsReport:
    id: ${report.id}
    type: ${report.type}
    stats:`;
      for (const key in report) {
        let x = `
      - stat:
        name: ${key}
        value: ${report[key]}`;
        p += x;
      }
      result += p;
    }
  });
  console.log(result);
}

// extract legacy reports
function legacy(response) {
  let result = 'Reports:';
  response.result().forEach(report => {
    let p = `
  - RTCLegacyStatsReport:
    id: ${report.id}
    type: ${report.type}
    stats:`;
    report.names().forEach(item => {
      let x = `
      - stat:
        name: ${item}
        value: ${report.stat(item)}`
      p += x;
    });
    result += p;
  });
  console.log(result);
}

// chrome
pc.getStats().then(standard);
pc.getStats(legacy);

// firefox - no legacy reports
pc.getStats().then(standard);

// safari - no legacy reports
pc.getStats().then(standard);

// todo - edge
