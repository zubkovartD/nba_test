import Select from 'react-select';

interface selectTypes {
  onChange: Function,
  options: [
    option: string,
    value: string
  ],
  value: string,
  className: string
}

type Option = {
  value: string,
  label: string
}

const CustomSelect: any = ({onChange, options, value, className}: selectTypes) => {

  const defaultValue = (options:any, value: string) => {
    return options ? options.find((option: Option) => option.value === value): ''
  }
  return (
    <div className={className}>
      <Select 
        value={defaultValue(options, value)}
        onChange={value => onChange(value)}
        options={options}
      />
    </div>
  )
}

export default CustomSelect;