## [1.8.2]
>  Nov 3, 2019

### Roxie Core

* [#25] Issue with `jquery-slim`

### Roxie UI

* [#25] Issue with `jquery-slim`

## [1.8.0]
>  Nov 1, 2019

### Roxie Core

* [#20] Should supports extension methods on Date
* [#21] Missing logger with latest version
* [#22] Should use axios instead of jquery ajax

### Roxie Server

* [#23] Should keep `@roxie/server` up to date

### Roxie UI

* [#24] Correct theme for `.page-link` class

### Roxie Components

* `Dropdown` should load data from `DataStore`
* Supports to unsubscribe `DataStore` when `Chart` unloaded

### Docs

* Update docs

## [1.7.0]
> Oct 25, 2019

### Roxie Core

* Supports to parse query string `select ... from ... where ...` to `Query` object
* Supports to `unsubscribe` on `Subject`

### Roxie UI

* Supports `roxie-theme-blueprint`, `roxie-theme-triton`
* Update `roxie-theme-dark`

### Roxie Components

* Re-styling `Dropdown`
* Implement `FileField` component
* Unsubscribe `Store` when `Grid`, `List` unmounted

### Docs

* Update docs

## [1.6.0]
> Oct 18, 2019

### Roxie Core

* Remove redundant space in `Roxie.classNames` function
* Import all `date-fns` functions into Roxie.Date

### Roxie UI

* Using `font-awesome` v4.7.0 for icon
* Supports `roxie-theme-dark`

### Roxie Components

* Fix issue cannot filter on dropdown
* Fix issue cannot unselect item on dropdown
* Implement `DatePickerPortal`, `DatePicker` component

### Docs

* Update docs

## [1.5.1]
> Oct 14, 2019

### Roxie Core

* [#14] Store/Model should have a function `loadData`
* [#17] Store/Model should supports multiple subscribers
* [#18] `Roxie.isEmpty` is not working if value is undefined

### Roxie UI

* [#15] Re-styling chart on `roxie-theme-dark`
* [#16] Re-styling input group on `roxie-theme-dark`
* [#19] Re-styling link dropdown item

### Roxie Components

* Implement `Dropdown` component
* Implement `List` component
* Implement `TabPanel` component

## [1.4.2]
> Oct 12, 2019

### Roxie Core

* [#13] Cannot resolve dependency '@roxie/components'

### Roxie Components

* [#13] Cannot resolve dependency '@roxie/components'

## [1.4.1]
> Oct 11, 2019

### Roxie Core

* Not override array function to prevent an issue with `c3`, `d3`

### Roxie Components

* Implement `Chart` component

## [1.4.0]
> Oct 10, 2019

### Roxie Core

* Define `PlainObject<T>` type
* Add `headers` to `AjaxSettings`
* Update `Subject` to keep last value
* Implement `DataModel` to load single data
* Update `DataStore` to load an array

### Roxie UI

* Correct `roxie-theme-light` color
* Refactor code

### Roxie Components

* Implement `Grid`, `Column` component

## [1.3.0]
> Oct 6, 2019

### Roxie Core

* Supports to load intial data from `DataStore`
* Update docs

### Roxie UI

* Breaking changes on css
  * Override bootstrap with `roxie-ui.css`
  * New color scheme for `roxie-theme-dark.css`
  * Rename `ui.js` to `roxie-ui.js`

### Roxie Components

* Implement `Container` component
* Implement `Dialog` component
* Clean up code

## [1.2.2]
> Sep 28, 2019

### Roxie UI

* [#9] Cannot resolve dependency '../node_modules/font-awesome/css/font-awesome.css'

## [1.2.0]
> Sep 26, 2019

### Roxie Core

* Clean up code
* Update docs

### Roxie Styles

* Supports `roxie-theme-light`
* Supports `roxie-theme-dark`