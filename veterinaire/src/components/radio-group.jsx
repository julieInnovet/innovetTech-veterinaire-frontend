import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export const CustomRadioGroup=({ title, name }) =>{
  return (
    <div className="space-y-2 flex justify-center items-center gap-3">
        
      <Label className="font-medium">{title}</Label>
      <RadioGroup defaultValue="non" name={name} className="space-y-1 ">
        
        <div className="flex items-center space-x-2 ">
            
          <RadioGroupItem value="oui" id={`${name}-oui`} />
          
          <Label htmlFor={`${name}-oui`} className="font-normal">
            Oui
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="non" id={`${name}-non`} />
          <Label htmlFor={`${name}-non`} className="font-normal">
            Non
          </Label>
        </div>
      </RadioGroup>
    </div>
  )
}

