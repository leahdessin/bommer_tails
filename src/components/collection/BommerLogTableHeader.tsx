import React from 'react';
import styled from 'styled-components';

const StyledThead = styled.thead`
  font-size: 15px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const StyledTh = styled.th`
  padding-right: 8px;
  min-width: 20px;
  vertical-align: bottom;
  text-align: left;
`;

export default function BommerLogTableHeader(){
    return (
        <StyledThead>
            <tr>
                <StyledTh></StyledTh>
                <StyledTh>Line Number</StyledTh>
                <StyledTh>Severity</StyledTh>
                <StyledTh>Timestamp</StyledTh>
                <StyledTh>Origin</StyledTh>
                <StyledTh>Thread</StyledTh>
                <StyledTh>Message</StyledTh>
            </tr>
        </StyledThead>
    )
}