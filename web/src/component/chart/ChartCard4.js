import React, {useState} from 'react'
import { ResponsiveRadar } from '@nivo/radar'

export default (props) => {

    let data =
        [
            {
                "taste": "fruity",
                "chardonay": 46,
                "carmenere": 120,
                "syrah": 25
            },
            {
                "taste": "bitter",
                "chardonay": 114,
                "carmenere": 42,
                "syrah": 58
            },
            {
                "taste": "heavy",
                "chardonay": 90,
                "carmenere": 102,
                "syrah": 20
            },
            {
                "taste": "strong",
                "chardonay": 39,
                "carmenere": 74,
                "syrah": 44
            },
            {
                "taste": "sunny",
                "chardonay": 35,
                "carmenere": 64,
                "syrah": 90
            }
        ];

    return (
        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 tm-block-col">
        <div className="tm-bg-primary-dark tm-block tm-block-taller">
            <h2 className="tm-block-title">{props.title}</h2>
            <ResponsiveRadar
                data={data}
                keys={[ 'chardonay', 'carmenere', 'syrah' ]}
                indexBy="taste"
                maxValue="auto"
                margin={{ top: 50, right: 0, bottom: 80, left: 0 }}
                curve="linearClosed"
                borderWidth={2}
                borderColor={{ from: 'color' }}
                gridLevels={5}
                gridShape="circular"
                gridLabelOffset={36}
                enableDots={true}
                dotSize={10}
                dotColor={{ theme: 'background' }}
                dotBorderWidth={2}
                dotBorderColor={{ from: 'color' }}
                enableDotLabel={true}
                dotLabel="value"
                dotLabelYOffset={-12}
                colors={{ scheme: 'nivo' }}
                fillOpacity={0.25}
                blendMode="multiply"
                animate={true}
                motionStiffness={90}
                motionDamping={15}
                isInteractive={true}
                legends={[
                    {
                        anchor: 'top-left',
                        direction: 'column',
                        translateX: -50,
                        translateY: -40,
                        itemWidth: 80,
                        itemHeight: 20,
                        itemTextColor: '#999',
                        symbolSize: 12,
                        symbolShape: 'circle',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemTextColor: '#000'
                                }
                            }
                        ]
                    }
                ]}
            />
        </div>
    </div>
    )
}
