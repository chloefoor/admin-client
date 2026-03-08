import { useState } from 'react';
import * as ContextMenu from '@radix-ui/react-context-menu';
import type { Translations } from '@ty/Types.ts';
//import { ImageScaler } from './ImageScaler.tsx';
import { ImageButton } from '@components/Formic/SlateInput/FormattingComponents.tsx';
import type { IFrameData, AVAEditor } from '@ty/slate.ts';

interface RTEIFrameProps {
  i18n: Translations;
  url: string;
  editor?: AVAEditor;
}

export const RTEIFrame = (props: RTEIFrameProps) => {

  const { t } = props.i18n;
  return (
    <>
      <ContextMenu.Root>
        <ContextMenu.Trigger>
          <iframe
            src={props.url}
          ></iframe>
        </ContextMenu.Trigger>
      </ContextMenu.Root>
    </>
  );
};
