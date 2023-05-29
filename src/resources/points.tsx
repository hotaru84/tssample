import { MdOutlineMessage } from 'react-icons/md';
import { TbBarcode, TbDatabase, TbPackage,TbPackageExport } from 'react-icons/tb';
import { MdFlashOn } from "react-icons/md";
import { IconType } from 'react-icons';

export const points:PointProps[] = [
  {
    title: 'Trigger',
    icon: MdFlashOn,
    description: "Digital Input1",
  },
  {
    title: 'Package',
    icon: TbPackage,
    description: "Digital Input2" ,
  },
  {
    title: 'Code',
    icon: TbBarcode,
    description: "Scanner x 6" ,
  },
  {
    title: 'Telegram',
    icon: MdOutlineMessage,
    description: "800mm, Trailing Edge" ,
  },
  {
    title: 'Result',
    icon: TbDatabase,
    description: "600mm, Leading Edge" ,
  },
];

export interface PointProps {
  title: string;
  description: string;
  icon: IconType;
}
