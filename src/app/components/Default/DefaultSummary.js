import React from 'react';

const DefaultSummary = () => {
    return (
        <div className='calculation-summary'>
            <div className="summary-titles">
                <div className="titleAndValue">
                    <span className='title'>총 수익</span>
                </div>
                <div className="titleAndValue">
                    <span className='title'>최종 금액</span>
                </div>
            </div>
            <div className="summary-table">
                <table>
                    <thead>
                        <tr>
                            <th>기간</th>
                            <th>수익(₩)</th>
                            <th>총액(₩)</th>
                            <th>수익율</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    );
}

export default DefaultSummary;