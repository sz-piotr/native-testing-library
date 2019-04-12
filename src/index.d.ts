import { ReactElement, ComponentType } from 'react'
import { ReactTestInstance, ReactTestRenderer, act } from 'react-test-renderer'

// EVENTS
// ------

// TODO: type second parameter
export declare class NativeEvent {
  constructor(typeArg: string, event?: any)
}

export declare function getEventHandlerName(key: string): string

export interface FireEventFn {
  (element: FiberRoot, event: NativeEvent): any
  focus(element: FiberRoot, init?: any): any
  blur(element: FiberRoot, init?: any): any
  change(element: FiberRoot, init?: any): any
  changeText(element: FiberRoot, value: string): any
  contentSizeChange(element: FiberRoot, init?: any): any
  endEditing(element: FiberRoot, init?: any): any
  keyPress(element: FiberRoot, init?: any): any
  submitEditing(element: FiberRoot, init?: any): any
  layout(element: FiberRoot, init?: any): any
  selectionChange(element: FiberRoot, init?: any): any
  longPress(element: FiberRoot, init?: any): any
  press(element: FiberRoot, init?: any): any
  pressIn(element: FiberRoot, init?: any): any
  pressOut(element: FiberRoot, init?: any): any
  momentumScrollBegin(element: FiberRoot, init?: any): any
  momentumScrollEnd(element: FiberRoot, init?: any): any
  scroll(element: FiberRoot, init?: any): any
  scrollBeginDrag(element: FiberRoot, init?: any): any
  scrollEndDrag(element: FiberRoot, init?: any): any
  load(element: FiberRoot, init?: any): any
  error(element: FiberRoot, init?: any): any
  progress(element: FiberRoot, init?: any): any
}
export declare const fireEvent: FireEventFn

// GET NODE TEXT
// -------------

export declare function getNodeText(node: FiberRoot): string

// GET QUERIES FOR ELEMENT
// -----------------------

export declare function getQueriesForElement<T = Queries>(element: ReactElement, queries?: T): BoundQueries<T>
export declare function within<T = Queries>(element: ReactElement, queries?: T): BoundQueries<T>

// PREETY PRINT
// ------------

// TODO: options are pretty-format options
export declare function prettyPrint(element: ReactTestRenderer | FiberRoot, maxLength?: number, options?: any): string

// QUERIES
// -------

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
type Bound<T> = T extends (arg: any, ...rest: infer U) => infer V ? (...args: U) => V : never
type BoundQueries<T> = { [P in keyof T]: Bound<T[P]> }

export type FiberRoot = Omit<ReactTestInstance, 'find' | 'findAllByProps' | 'findAllByType' | 'findByProps' | 'findByType' | 'instance'>

export type TextMatch = string | RegExp | ((value: string) => boolean)
export type FilterFn = (value: string, index: number) => boolean
export type NormalizerFn = (input: string) => string

export interface NormalizerOptions {
  exact?: boolean,
  trim?: boolean,
  collapseWhitespace?: boolean,
  filter?: FilterFn,
  normalizer?: NormalizerFn,
}

export interface TextNormalizerOptions extends NormalizerOptions {
  types?: string[]
}

export declare function getByA11yHint(container: FiberRoot, match: TextMatch, options?: NormalizerOptions): FiberRoot
export declare function getByA11yLabel(container: FiberRoot, match: TextMatch, options?: NormalizerOptions): FiberRoot
export declare function getByA11yRole(container: FiberRoot, match: TextMatch, options?: NormalizerOptions): FiberRoot
export declare function getByA11yStates(container: FiberRoot, match: string[], options?: NormalizerOptions): FiberRoot
export declare function getByA11yTraits(container: FiberRoot, match: string[], options?: NormalizerOptions): FiberRoot
export declare function getByPlaceholder(container: FiberRoot, match: TextMatch, options?: NormalizerOptions): FiberRoot
export declare function getByText(container: FiberRoot, match: TextMatch, options?: TextNormalizerOptions): FiberRoot
export declare function getByValue(container: FiberRoot, match: TextMatch, options?: NormalizerOptions): FiberRoot
export declare function getByTestId(container: FiberRoot, match: TextMatch, options?: NormalizerOptions): FiberRoot

export declare function getAllByA11yHint(container: FiberRoot, match: TextMatch, options?: NormalizerOptions): FiberRoot[]
export declare function getAllByA11yLabel(container: FiberRoot, match: TextMatch, options?: NormalizerOptions): FiberRoot[]
export declare function getAllByA11yRole(container: FiberRoot, match: TextMatch, options?: NormalizerOptions): FiberRoot[]
export declare function getAllByA11yStates(container: FiberRoot, match: string[], options?: NormalizerOptions): FiberRoot[]
export declare function getAllByA11yTraits(container: FiberRoot, match: string[], options?: NormalizerOptions): FiberRoot[]
export declare function getAllByPlaceholder(container: FiberRoot, match: TextMatch, options?: NormalizerOptions): FiberRoot[]
export declare function getAllByText(container: FiberRoot, match: TextMatch, options?: TextNormalizerOptions): FiberRoot[]
export declare function getAllByValue(container: FiberRoot, match: TextMatch, options?: NormalizerOptions): FiberRoot[]
export declare function getAllByTestId(container: FiberRoot, match: TextMatch, options?: NormalizerOptions): FiberRoot[]

export declare function queryByA11yHint(container: FiberRoot, match: TextMatch, options?: NormalizerOptions): FiberRoot | null
export declare function queryByA11yLabel(container: FiberRoot, match: TextMatch, options?: NormalizerOptions): FiberRoot | null
export declare function queryByA11yRole(container: FiberRoot, match: TextMatch, options?: NormalizerOptions): FiberRoot | null
export declare function queryByA11yStates(container: FiberRoot, match: string[], options?: NormalizerOptions): FiberRoot | null
export declare function queryByA11yTraits(container: FiberRoot, match: string[], options?: NormalizerOptions): FiberRoot | null
export declare function queryByPlaceholder(container: FiberRoot, match: TextMatch, options?: NormalizerOptions): FiberRoot | null
export declare function queryByText(container: FiberRoot, match: TextMatch, options?: TextNormalizerOptions): FiberRoot | null
export declare function queryByValue(container: FiberRoot, match: TextMatch, options?: NormalizerOptions): FiberRoot | null
export declare function queryByTestId(container: FiberRoot, match: TextMatch, options?: NormalizerOptions): FiberRoot | null

export declare function findByA11yHint(container: FiberRoot, match: TextMatch, options?: NormalizerOptions): Promise<FiberRoot>
export declare function findByA11yLabel(container: FiberRoot, match: TextMatch, options?: NormalizerOptions): Promise<FiberRoot>
export declare function findByA11yRole(container: FiberRoot, match: TextMatch, options?: NormalizerOptions): Promise<FiberRoot>
export declare function findByA11yStates(container: FiberRoot, match: string[], options?: NormalizerOptions): Promise<FiberRoot>
export declare function findByA11yTraits(container: FiberRoot, match: string[], options?: NormalizerOptions): Promise<FiberRoot>
export declare function findByPlaceholder(container: FiberRoot, match: TextMatch, options?: NormalizerOptions): Promise<FiberRoot>
export declare function findByText(container: FiberRoot, match: TextMatch, options?: TextNormalizerOptions): Promise<FiberRoot>
export declare function findByValue(container: FiberRoot, match: TextMatch, options?: NormalizerOptions): Promise<FiberRoot>
export declare function findByTestId(container: FiberRoot, match: TextMatch, options?: NormalizerOptions): Promise<FiberRoot>

export declare function findAllByA11yHint(container: FiberRoot, match: TextMatch, options?: NormalizerOptions): Promise<FiberRoot[]>
export declare function findAllByA11yLabel(container: FiberRoot, match: TextMatch, options?: NormalizerOptions): Promise<FiberRoot[]>
export declare function findAllByA11yRole(container: FiberRoot, match: TextMatch, options?: NormalizerOptions): Promise<FiberRoot[]>
export declare function findAllByA11yStates(container: FiberRoot, match: string[], options?: NormalizerOptions): Promise<FiberRoot[]>
export declare function findAllByA11yTraits(container: FiberRoot, match: string[], options?: NormalizerOptions): Promise<FiberRoot[]>
export declare function findAllByPlaceholder(container: FiberRoot, match: TextMatch, options?: NormalizerOptions): Promise<FiberRoot[]>
export declare function findAllByText(container: FiberRoot, match: TextMatch, options?: TextNormalizerOptions): Promise<FiberRoot[]>
export declare function findAllByValue(container: FiberRoot, match: TextMatch, options?: NormalizerOptions): Promise<FiberRoot[]>
export declare function findAllByTestId(container: FiberRoot, match: TextMatch, options?: NormalizerOptions): Promise<FiberRoot[]>

export interface Queries {
  getByA11yHint: typeof getByA11yHint
  getByA11yLabel: typeof getByA11yLabel
  getByA11yRole: typeof getByA11yRole
  getByA11yStates: typeof getByA11yStates
  getByA11yTraits: typeof getByA11yTraits
  getByPlaceholder: typeof getByPlaceholder
  getByText: typeof getByText
  getByValue: typeof getByA11yHint
  getByTestId: typeof getByTestId

  getAllByA11yHint: typeof getAllByA11yHint
  getAllByA11yLabel: typeof getAllByA11yLabel
  getAllByA11yRole: typeof getAllByA11yRole
  getAllByA11yStates: typeof getAllByA11yStates
  getAllByA11yTraits: typeof getAllByA11yTraits
  getAllByPlaceholder: typeof getAllByPlaceholder
  getAllByText: typeof getAllByText
  getAllByValue: typeof getAllByA11yHint
  getAllByTestId: typeof getAllByTestId

  queryByA11yHint: typeof queryByA11yHint
  queryByA11yLabel: typeof queryByA11yLabel
  queryByA11yRole: typeof queryByA11yRole
  queryByA11yStates: typeof queryByA11yStates
  queryByA11yTraits: typeof queryByA11yTraits
  queryByPlaceholder: typeof queryByPlaceholder
  queryByText: typeof queryByText
  queryByValue: typeof queryByA11yHint
  queryByTestId: typeof queryByTestId

  findByA11yHint: typeof findByA11yHint
  findByA11yLabel: typeof findByA11yLabel
  findByA11yRole: typeof findByA11yRole
  findByA11yStates: typeof findByA11yStates
  findByA11yTraits: typeof findByA11yTraits
  findByPlaceholder: typeof findByPlaceholder
  findByText: typeof findByText
  findByValue: typeof findByA11yHint
  findByTestId: typeof findByTestId

  findAllByA11yHint: typeof findAllByA11yHint
  findAllByA11yLabel: typeof findAllByA11yLabel
  findAllByA11yRole: typeof findAllByA11yRole
  findAllByA11yStates: typeof findAllByA11yStates
  findAllByA11yTraits: typeof findAllByA11yTraits
  findAllByPlaceholder: typeof findAllByPlaceholder
  findAllByText: typeof findAllByText
  findAllByValue: typeof findAllByA11yHint
  findAllByTestId: typeof findAllByTestId
}

// QUERY HELPERS
// -------------

export declare function defaultFilter(node: FiberRoot): boolean
export declare function getBaseElement(container: ReactTestRenderer | ReactTestInstance): ReactTestInstance
export declare function getElementError(message: string, container: ReactTestRenderer): Error
export declare function firstResultOrNull<T extends any[], U>(query: (...args: T) => U[], ...args: T): U | null
export declare function filterNodeByType(node: FiberRoot, type: string): boolean
export declare function queryAllByProp(
  attribute: string,
  container: ReactTestRenderer,
  match: TextMatch,
  options?: NormalizerOptions,
): FiberRoot[]
export declare function queryByProp(
  attribute: string,
  container: ReactTestRenderer,
  match: TextMatch,
  options?: NormalizerOptions,
): FiberRoot | null
export function removeBadProperties(node: ReactTestInstance): FiberRoot

// WAIT
// ----

export interface WaitOptions {
  timeout?: number
  interval?: number
}
export declare function wait(callback?: () => void, options?: WaitOptions): Promise<void>

// WAIT FOR ELEMENT
// ----------------

export interface WaitOptions {
  timeout?: number
  interval?: number
}
export declare function waitForElement<T>(callback: () => T, options?: WaitOptions): Promise<T>

// WAIT FOR ELEMENT TO BE REMOVED
// ------------------------------

export interface WaitOptions {
  timeout?: number
  interval?: number
}
export declare function waitForElementToBeRemoved(callback: () => any, options?: WaitOptions): Promise<null>

// MATCHES
// -------

export interface DefaultNormalizerOptions {
  trim?: boolean,
  collapseWhitespace?: boolean,
}
export declare function getDefaultNormalizer(options: DefaultNormalizerOptions): NormalizerFn

// INDEX
// -----

export interface RenderOptions {
  wrapper?: ComponentType<{ children: ReactElement }>
}
export interface RenderOptionsWithQueries<T> extends RenderOptions {
  queries?: T
}

export declare function render(ui: ReactElement, options?: RenderOptions): RenderResult & BoundQueries<Queries>
export declare function render<T>(ui: ReactElement, options: RenderOptionsWithQueries<T>): RenderResult & BoundQueries<T>

export interface RenderResult {
  container: ReactTestRenderer
  baseElement: FiberRoot
  debug: () => void
  rerender: (ui: ReactElement) => void
  unmount: () => void
}

export interface RenderHookOptions<T> extends RenderOptions {
  initialProps?: T
}

export declare function renderHook<T, U>(callback: (props: T) => U, options?: RenderHookOptions<T>): RenderHookResult<T, U>

export interface RenderHookResult<T, U> {
  result: {
    current: U
  }
  error?: Error
  waitForNextUpdate: () => Promise<void>
  rerender: (newProps?: T) => void
  unmount: () => void
}

export { act }