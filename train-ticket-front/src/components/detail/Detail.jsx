import React, { memo, useMemo } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import './Detail.css';

function format(d) {
    const date = dayjs(d);

    return date.format('MM-DD') + ' ' + date.locale('zh-cn').format('ddd');
}

const Detail = memo(function Detail(props) {
    const {
        departDate,
        arriveDate,
        departTimeStr,
        arriveTimeStr,
        trainNumber,
        departStation,
        arriveStation,
        durationStr,
    } = props;

    const departDateStr = useMemo(() => format(departDate), [departDate]);
    const arriveDateStr = useMemo(() => format(arriveDate), [arriveDate]);

    return (
        <div className="detail">
            <div className="content">
                <div className="left">
                    <p className="city">{departStation}</p>
                    <p className="time">{departTimeStr}</p>
                    <p className="date">{departDateStr}</p>
                </div>
                <div className="middle">
                    <p className="train-name">{trainNumber}</p>
                    <p className="train-mid">{props.children}</p>
                    <p className="train-time">耗时{durationStr}</p>
                </div>
                <div className="right">
                    <p className="city">{arriveStation}</p>
                    <p className="time">{arriveTimeStr}</p>
                    <p className="date">{arriveDateStr}</p>
                </div>
            </div>
        </div>
    );
});

Detail.propTypes = {
    departDate: PropTypes.number.isRequired,
    arriveDate: PropTypes.number.isRequired,
    departTimeStr: PropTypes.string,
    arriveTimeStr: PropTypes.string,
    trainNumber: PropTypes.string.isRequired,
    departStation: PropTypes.string.isRequired,
    arriveStation: PropTypes.string.isRequired,
    durationStr: PropTypes.string,
};

export default Detail;
