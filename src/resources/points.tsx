import { IconType } from 'react-icons';
import { TbPackageExport, TbDatabase, TbMapPin, TbMessageForward, TbPackageImport, TbArrowFork } from 'react-icons/tb';
import { FormProps } from '../component/ConfigForm';

export const MirroredTbPackageImport = ({ ...props }) => {
  return (
    <TbPackageImport {...props} style={{ transform: 'scaleX(-1)' }} />
  )
};
export const RotatedTbArrowFork = ({ ...props }) => {
  return (
    <TbArrowFork {...props} style={{ transform: 'rotate(90deg)' }} />
  )
}

interface PointProps {
  title: string;
  description: string;
  icon: IconType;
  formProps: FormProps[];
}

export const points: PointProps[] = [
  {
    title: 'A',
    icon: TbMessageForward,
    description: "Desc A",
    formProps: [
      {
        label: 'a', type: 'slider', args: ''
      },
      {
        label: 'a', type: 'switch', args: ''
      }
    ]
  },
  {
    title: 'b',
    icon: MirroredTbPackageImport,
    description: "Desc B",
    formProps: [
      {
        label: 'b', type: 'select', args: ''
      }
    ]
  },
  {
    title: 'c',
    icon: TbMapPin,
    description: "Desc C",
    formProps: [
      {
        label: 'c', type: 'text', args: ''
      }
    ]
  },
  {
    title: 'd',
    icon: TbDatabase,
    description: "Desc D",
    formProps: [
      {
        label: 'd', type: 'radio', args: ''
      }
    ]
  },
  {
    title: 'e',
    icon: RotatedTbArrowFork,
    description: "Desc D",
    formProps: [
      {
        label: 'e', type: 'slider', args: ''
      }
    ]
  },
  {
    title: 'f',
    icon: TbPackageExport,
    description: "Desc E",
    formProps: [
      {
        label: 'f', type: 'select', args: ''
      }
    ]
  },
];