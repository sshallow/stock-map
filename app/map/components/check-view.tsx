"use client";

import { CheckIcon, SunIcon } from "@radix-ui/react-icons";
import * as React from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Command, CommandGroup, CommandItem, CommandList, CommandSeparator } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";





interface DataTableFacetedFilterProps {
  title?: string
  onSelectedChange: (selectedValues: Set<string>) => void
}

const options = [
  { value: "hl_newStock", label: "新股", icon: {} },
  { value: "hl_up", label: "涨停", icon: {} },
  { value: "hl_low", label: "跌停", icon: {} },
  { value: "hl_newHigh30", label: "30日新高", icon: {} },
  { value: "hl_newLow30", label: "30日新低", icon: {} },
  { value: "hl_newHigh60", label: "60日新高", icon: {} },
  { value: "hl_newLow60", label: "60日新低", icon: {} },
]

export function CheckView({
  title,
  onSelectedChange,
}: DataTableFacetedFilterProps) {
  const [selectedValues, setSelectedValues] = React.useState(new Set<string>())

  const handleSelect = (value: string) => {
    console.log("选中的值:", value)
    const newSelectedValues = new Set(selectedValues)
    if (newSelectedValues.has(value)) {
      newSelectedValues.delete(value)
    } else {
      newSelectedValues.add(value)
    }
    setSelectedValues(newSelectedValues)
    onSelectedChange(newSelectedValues)
  }

  const handleClear = () => {
    const newSelectedValues = new Set<string>()
    setSelectedValues(newSelectedValues)
    onSelectedChange(newSelectedValues)
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="h-9 border-dashed text-sm"
        >
          <SunIcon className="mr-2 h-4 w-4" />
          {title}
          {selectedValues.size > 0 && (
            <>
              <Separator orientation="vertical" className="mx-2 h-4" />
              <Badge
                variant="secondary"
                className="rounded-sm px-1 font-normal lg:hidden"
              >
                {selectedValues.size}
              </Badge>
              <div className="hidden space-x-1 lg:flex">
                {selectedValues.size > 2 ? (
                  <Badge
                    variant="secondary"
                    className="rounded-sm px-1 font-normal"
                  >
                    {selectedValues.size} 类
                  </Badge>
                ) : (
                  options
                    .filter((option) => selectedValues.has(option.value))
                    .map((option) => (
                      <Badge
                        variant="secondary"
                        key={option.value}
                        className="rounded-sm px-1 font-normal"
                      >
                        {option.label}
                      </Badge>
                    ))
                )}
              </div>
            </>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0" align="start">
        <Command>
          <CommandList>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  key={option.value}
                  onSelect={() => handleSelect(option.value)}
                >
                  <div
                    className={cn(
                      "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                      selectedValues.has(option.value)
                        ? "bg-primary text-primary-foreground"
                        : "opacity-50 [&_svg]:invisible"
                    )}
                  >
                    <CheckIcon className={cn("h-4 w-4")} />
                  </div>
                  <span>{option.label}</span>
                  <span>
                    {/* 两个嵌套的圆形 */}

                  </span>
                </CommandItem>
              ))}
            </CommandGroup>
            {selectedValues.size > 0 && (
              <>
                <CommandSeparator />
                <CommandGroup>
                  <CommandItem
                    onSelect={handleClear}
                    className="justify-center text-center text-red-500"
                  >
                    清除高亮
                  </CommandItem>
                </CommandGroup>
              </>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}