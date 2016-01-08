
  chartManifest = {
    id: 'sucrose-multibar',
    type: 'multibar',
    title: 'Multibar Chart',
    // Use these option presets to set the form input values
    // These chart options will be set
    optionPresets: {
      file: 'multibar_data',
      show_labels: '1'
    },
    yAxisLabel: 'Y-axis label',
    xAxisLabel: 'X-axis label',
    // These options should match the names of all form input names
    // Set them to the default value as expected by sucrose
    // If the option remains the default value, the chart option will not be set
    optionDefaults: {
      show_labels: '0',
      vertical: '1',
      show_values: '0',
      allow_scroll: '1',
      tick_display: ['wrap', 'stagger', 'rotate']
    },
    ui: {
      '[name=file]': {
        // Set data file options in Manifest control
        values: [
          {value: 'multibar_data', label: 'Forecasting for Q1'},
          {value: 'multibar_data_color', label: 'Forecasting for Q2 (color data)'},
          {value: 'multibar_data_negative', label: 'Forecasting for Q1 (negative)'},
          {value: 'multibar_data_wide', label: 'Opportunities by Industry (wide)'},
          {value: 'multibar_data_baseline', label: 'Opportunities Won/Lost by Industry (baseline)'},
          {value: 'multibar_data_opportunities', label: 'All Opportunities By Lead Source By Outcome'},
          {value: 'multibar_data_long', label: 'Accounts by Type by Industry'},
          {value: 'multibar_data_short', label: 'Apples or Oranges'},
          {value: 'multibar_data_raw', label: 'Raw Report Data'}
        ]
      },
      '[name=vertical]': {
        init: function ($o) {
          this.initControl($o.attr('name'));
        },
        bind: function (d, v, $o) {
          return this.bindControl(d, $o.attr('name'), v, this.chartRenderer());
        },
        chartInit: function (v, self) {
          var value = !!parseInt(v, 10);
          self.Chart.vertical(value);
        },
        check: /0|1/i,
        events: 'change.my',
        title: 'Orientation',
        type: 'radio',
        values: [
          {value: '1', label: 'Vertical'},
          {value: '0', label: 'Horizontal'}
        ]
      },
      '[name=show_values]': {
        init: function ($o) {
          this.initControl($o.attr('name'));
        },
        bind: function (d, v, $o) {
          return this.bindControl(d, $o.attr('name'), v, this.chartRenderer());
        },
        chartInit: function (v, self) {
          var value = isNaN(v) ? v : !!parseInt(v, 10);
          self.Chart.showValues(value);
        },
        check: /0|1|start|middle|end|top|total/i,
        events: 'change.my',
        title: 'Show Values',
        type: 'select',
        values: [
          {value: '0', label: 'No'},
          {value: '1', label: 'Yes'},
          {value: 'start', label: 'Start'},
          {value: 'middle', label: 'Middle'},
          {value: 'end', label: 'End'},
          {value: 'top', label: 'Top'},
          {value: 'total', label: 'Total'}
        ]
      },
      '[name=allow_scroll]': {
        init: function ($o) {
          this.initControl($o.attr('name'));
        },
        bind: function (d, v, $o) {
          return this.bindControl(d, $o.attr('name'), v, this.chartUpdater());
        },
        chartInit: function (v, self) {
          var value = !!parseInt(v, 10);
          self.Chart.allowScroll(value);
          // d3.select('#chart svg')
          //     .datum(null)
          //     .call(chart);
          // d3.select('#chart svg')
          //     .datum(chartData)
          //     .call(chart);
        },
        check: /0|1/i,
        events: 'change.my',
        title: 'Allow Scrolling',
        type: 'radio',
        values: [
          {value: '0', label: 'No'},
          {value: '1', label: 'Yes'}
        ]
      },
      '[name=show_labels]': {
        init: function ($o) {
          this.initControl($o.attr('name'));
        },
        bind: function (d, v, $o) {
          return this.bindControl(d, $o.attr('name'), v, this.chartRenderer());
        },
        chartInit: function (v, self) {
          var value = !!parseInt(v, 10);
          self.Chart.xAxis.axisLabel(value ? self.xAxisLabel : null);
          self.Chart.yAxis.axisLabel(value ? self.yAxisLabel : null);
        },
        check: /0|1/i,
        events: 'change.my',
        title: 'Show Axes Labels',
        type: 'radio',
        values: [
          {value: '0', label: 'No'},
          {value: '1', label: 'Yes'}
        ]
      },
      '[name=tick_display]': {
        init: function ($o) {
          this.initControl($o.attr('name'));
        },
        bind: function (d, v, $o) {
          return this.bindControl(d, $o.attr('name'), v, this.chartRenderer());
        },
        chartInit: function (v, self) {
          var wrapTicks = $.inArray('wrap', v) !== -1,
              staggerTicks = $.inArray('stagger', v) !== -1,
              rotateTicks = $.inArray('rotate', v) !== -1;
          self.Chart
            .wrapTicks(wrapTicks)
            .staggerTicks(staggerTicks)
            .rotateTicks(rotateTicks);
        },
        check: /wrap|stagger|rotate/i,
        events: 'change.my',
        title: 'Tick Display Methods',
        type: 'checkbox',
        values: [
          {value: 'wrap', label: 'Wrap'},
          {value: 'stagger', label: 'Stagger'},
          {value: 'rotate', label: 'Rotate'}
        ]
      }
    }
  };
  var cachedManifest = $.my.tojson(chartManifest);
  console.log(cachedManifest);
