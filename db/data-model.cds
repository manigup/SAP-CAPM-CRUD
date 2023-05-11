namespace my.bookshop;

using {cuid} from '@sap/cds/common';

entity Books {
  key ID    : UUID;
      title : String;
      stock : Integer;
}
