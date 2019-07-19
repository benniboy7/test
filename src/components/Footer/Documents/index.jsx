import * as React from 'react';

import { Label, ListItemStyled, Select } from './styled';

import BrochurePdf from './pdf/Brochure.pdf';
import OneSheetPdf from './pdf/OneSheet.pdf';
import PilotHistoryFormPdf from './pdf/PilotHistoryFormPdf.pdf';
import AircraftApplicationPdf from './pdf/AircraftApplicationPdf.pdf';
import AviationProductsLiabilityApplicationPdf from './pdf/AviationProductsLiabilityApplicationPdf.pdf';
import AirportLiabilityApplicationPdf from './pdf/AirportLiabilityApplicationPdf.pdf';

export const DOCUMENTS = [
  {
    id: 1,
    title: 'Brochure',
    pdf: BrochurePdf,
  },
  {
    id: 2,
    title: 'One Sheet',
    pdf: OneSheetPdf,
  },
  {
    id: 3,
    title: 'Pilot History Form',
    pdf: PilotHistoryFormPdf,
  },
  {
    id: 4,
    title: 'Aircraft Application',
    pdf: AircraftApplicationPdf,
  },
  {
    id: 5,
    title: 'Aviation Products Liability Application',
    pdf: AviationProductsLiabilityApplicationPdf,
  },
  {
    id: 6,
    title: 'Airport Liability Application',
    pdf: AirportLiabilityApplicationPdf,
  },    
];

export default class Documents extends React.Component {
  handleDocumentSelect = e => {
    window.location = e.target.value;
  };

  render() {
    return (
      <ListItemStyled>
        <Label>Forms</Label>
        <Select value={0} onChange={this.handleDocumentSelect}>
          <option value={0} disabled>
            Forms
          </option>
          {DOCUMENTS.map(document => (
            <option key={document.id} value={document.pdf}>
              {document.title}
            </option>
          ))}
        </Select>
      </ListItemStyled>
    );
  }
}
