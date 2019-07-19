import * as React from 'react';

import { Label, ListItemStyled, Select } from './styled';

import BrochurePdf from './pdf/Brochure.pdf';
import OneSheetPdf from './pdf/OneSheet.pdf';

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
