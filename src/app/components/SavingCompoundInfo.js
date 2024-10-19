import React from 'react';

const SavingCompoundInfo = () => {
    return (
        <div className='info'>
            <h2>📙 1. 적립식 복리란?</h2>
            <p>
                적립식 복리란 일정 기간 동안 지속적으로 자금을 적립하면서, 그 적립된 자금에 대해 복리 효과를 적용하는 방식입니다. 
                일반적인 복리와의 차이점은 적립 방식에 있습니다. 일반적인 복리는 초기 자금에만 복리 이자를 적용하는 반면, 적립식 복리는 일정한 금액을 
                주기적으로 납입하며 그 금액에 복리 효과가 누적된다는 점에서 다릅니다. 즉, 매월, 매년 등 주기적으로 일정 금액을 추가로 저축하며, 
                이 금액에도 이자가 붙고, 그 이자가 다시 원금에 더해져 이자가 불어나는 구조입니다.
            </p>
            <p>
                적립식 복리는 장기적으로 자금을 늘리는 데 매우 유용한 방법입니다. 특히, 시간이 지남에 따라 복리의 이자 효과가 커지기 때문에 
                꾸준한 자금 관리를 통해 자산을 증식시키고자 하는 분들에게 매우 적합합니다. 적립식 복리를 잘 활용하면 비교적 소액의 자금으로도 
                장기적으로 큰 자산을 형성할 수 있습니다.
            </p>

            <h2>📙 2. 적립식 복리 계산기 사용 방법</h2>
            <h3>2.1 기본 입력 정보</h3>
            <ul>
                <li><strong>초기 투자금액:</strong> 적립식 복리는 주기적인 투자에 의존하지만, 초기 투자금액을 설정할 수 있습니다. 초기 투자금이 있을 경우, 첫 번째 납입 시점에 이 금액에 대한 복리 이자가 함께 계산됩니다.</li>
                <li><strong>적립 금액:</strong> 주기적으로 납입할 금액을 입력합니다. 예를 들어, 매월 적립을 원한다면 매월 적립할 금액을 입력하면 됩니다.</li>
                <li><strong>적립 기간:</strong> 몇 년 동안 적립할 것인지 설정합니다. 장기적으로 적립할수록 복리의 효과가 극대화됩니다.</li>
                <li><strong>이자율:</strong> 연간 이자율을 입력합니다. 이는 적립한 자금에 대해 매년 발생하는 이자를 뜻합니다.</li>
                <li><strong>적립 빈도:</strong> 적립 빈도를 설정합니다. 예를 들어, 매월 적립할 것인지, 매년 적립할 것인지 선택할 수 있습니다.</li>
            </ul>

            <h3>2.2 계산 버튼 사용</h3>
            <p>
                모든 정보를 입력한 후, ‘계산’ 버튼을 클릭하면 적립식 복리 효과를 자동으로 계산해 줍니다. 이 계산기는 입력한 초기 자금, 적립 금액, 기간, 
                이자율을 기반으로 최종적으로 얼마나 큰 자산을 형성할 수 있는지 시각적으로 보여줍니다.
            </p>

            <h3>2.3 계산 결과 확인</h3>
            <p>
                계산을 완료하면, 총 투자금, 발생한 이자 금액, 그리고 최종 잔액을 확인할 수 있습니다. 이 정보는 사용자가 원하는 기간 동안 어느 정도 자산을 
                늘릴 수 있는지를 명확하게 보여주며, 더 나은 투자 결정을 내리는 데 도움이 됩니다.
            </p>

            <h2>📙 3. 적립식 복리의 장점</h2>
            <ul>
                <li><strong>소액으로 시작 가능:</strong> 많은 초기 자본이 없어도 매달 적은 금액으로 시작할 수 있습니다.</li>
                <li><strong>시간이 지날수록 복리의 효과 증가:</strong> 시간이 지남에 따라 적립한 금액이 점점 더 큰 이자를 발생시키고, 이자가 다시 복리로 누적되기 때문에 큰 자산을 형성할 수 있습니다.</li>
                <li><strong>저위험 투자:</strong> 적립식 복리는 주식 투자 등 고위험 자산보다는 비교적 안정적인 자산 증식을 원할 때 유용합니다.</li>
            </ul>

            <h2>📙 4. 적립식 복리의 실제 활용 사례</h2>
            <h3>4.1 자녀 교육 자금 마련</h3>
            <p>
                자녀가 태어날 때부터 매달 일정 금액을 적립하여 적립식 복리 상품에 투자하면, 자녀가 대학에 입학할 시점까지 충분한 자금을 마련할 수 있습니다.
            </p>

            <h3>4.2 노후 자금 마련</h3>
            <p>
                매달 일정 금액을 적립하면서 노후 자금을 준비하면, 안정적인 노후 생활을 보장할 수 있습니다.
            </p>

            <h3>4.3 주택 구매 자금 마련</h3>
            <p>
                주택 구매를 위한 자금을 준비할 때도 적립식 복리를 활용할 수 있습니다. 매달 일정 금액을 꾸준히 적립하여 복리 효과를 누리면 원하는 시점에 
                주택 구매 자금을 확보할 수 있습니다.
            </p>
        </div>
    );
}

export default SavingCompoundInfo;
