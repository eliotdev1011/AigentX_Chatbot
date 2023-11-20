import { Fragment, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { IoCaretDownOutline } from 'react-icons/io5';

export default function CustomComboBox(props) {
  const [selected, setSelected] = useState(props.myItem[0])
  const [query, setQuery] = useState('')

  const filteredmyItem =
    query === ''
      ? props.myItem
      : props.myItem.filter((boxItem) =>
          boxItem.name
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        )

  return (
    <div className="w-full top-16">
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <div className="relative w-full overflow-hidden text-left rounded-lg shadow-md cursor-default border-[#747576] border focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
            <Combobox.Input
              className="w-full py-2 pl-3 pr-10 text-sm leading-5 bg-transparent"
              displayValue={(boxItem) => boxItem.name}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <IoCaretDownOutline
                className="w-5 h-5 text-[#747576]"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black/5 sm:text-sm">
              {filteredmyItem.length === 0 && query !== '' ? (
                <div className="relative px-4 py-2 text-gray-700 cursor-default select-none">
                  Nothing found.
                </div>
              ) : (
                filteredmyItem.map((boxItem) => (
                  <Combobox.Option
                    key={boxItem.id}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? 'bg-[#F1D6FF] text-white' : 'text-gray-900'
                      }`
                    }
                    value={boxItem}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate text-left ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {boxItem.name}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-teal-600'
                            }`}
                          >
                            <CheckIcon className="w-5 h-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  )
}
