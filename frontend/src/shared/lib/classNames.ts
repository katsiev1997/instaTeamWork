

type Mods = Record<string , boolean | string | number>

export const classNames = (cls: string , mods?: Mods , addn?: string[]) => {
    return [cls , ...addn , 
    ...Object.entries(mods).filter(([key , value]) => Boolean(value)).map(([className]) => className) ]
    .join(' ')
}