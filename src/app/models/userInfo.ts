export interface UserInfo{
    chart: {
        type: string
    },
    title: {
        text: string
    },
    subtitle: {
        text: string
    },
    accessibility: {
        announceNewData: {
            enabled: boolean
        }
    },
    xAxis: {
        type: string
    },
    yAxis: {
        title: {
            text: string
        }

    },
    legend: {
        enabled: boolean
    },
    plotOptions: {
        series: {
            borderWidth: number,
            dataLabels: {
                enabled: boolean,
                format: string
            }
        }
    },

    tooltip: {
        headerFormat: string,
        pointFormat: string
    },

    series: [
        {
            name: string,
            colorByPoint: boolean,
            data: [
                {}
            ]
        }
    ] }