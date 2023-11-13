import { useState } from 'react'
import { Switch } from '@headlessui/react'

export default function CustomSwitch(props) {
  const [enabled, setEnabled] = useState(props.checked)

  return (
    <div className="flex flex-row">
      <Switch
        disabled={props.disabled}
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? 'bg-gradient-to-r from-[#ED23FF] to-[#8E44FF] border-none pt-[4px]' : 'bg-transparent border-[#747576]'}
          ${props.disabled ? 'opacity-50' : 'opacity-100'}
          pt-[2px] pl-[2px] relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? 'translate-x-[19px] bg-white' : 'translate-x-0 bg-[#747576]'}
            pointer-events-none inline-block h-3 w-3 transform rounded-full shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
      <div className={`ml-2 text-white ${props.disabled ? 'opacity-50' : 'opacity-100'}`}>{props.content}</div>
    </div>
  )
}
