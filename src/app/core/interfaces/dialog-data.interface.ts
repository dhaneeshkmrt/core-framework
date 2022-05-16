export interface DialogData {
  title: string;
  message: string;
  actionButtons?: string[];
  closeButtonLabel?: string; // default 'Cancel'
  primaryButtonIndex?: number; // starts with 0.  default 0
}