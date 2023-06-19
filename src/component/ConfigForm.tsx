import {
  FormLabel,
  FormControl,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Spacer,
} from '@chakra-ui/react'
import { SliderForm } from './SliderForm';
import { RadioForm } from './RadioForm';
import { TextForm } from './TextForm';
import { SwitchForm } from './SwitchForm';
import { SelectForm } from './SelectForm';

export interface FormProps {
  label:String,
  type :String,
  args :any 
}

export const ConfigForm : React.FC<{props:FormProps[]}> = ({props}) => {
  return (
    <Card>
      <CardBody>
      <FormControl>
        {props.map((prop) => (
          <>
            <FormLabel fontWeight={"light"}>{prop.label}</FormLabel>
            <FormType type={prop.type} args={prop.args} />
          </>
        ))}
      </FormControl>
      </CardBody>
      <CardFooter>
        <Spacer />
        <ButtonGroup spacing='2'>
          <Button variant='solid' colorScheme="cyan">
            Apply
          </Button>
          <Button variant='ghost' colorScheme="cyan">
            Cancel
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  )
}
const FormType : React.FC<{type:String, args:any}> = ({type,args}) =>{
    switch(type) {
      case 'slider':
        return (<SliderForm args={args} />)
      case 'select':
        return (<SelectForm args={args} />)
        case 'switch':
          return (<SwitchForm args={args} />)
        case 'text':
          return (<TextForm args={args} />)
        case 'radio':
          return (<RadioForm args={args} />)
      default:
        return (<></>)
    }
}

