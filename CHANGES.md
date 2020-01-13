## [1.10.0]
> Jan 13, 2020

### Roxie Core

* Add `Ajax`, `Store` fields to `Roxie`
* Upgrade dependency `data-fns@2.9.0`

### Roxie UI

* Upgrade dependency `bootstrap@4.4.1`

### Roxie Components

* Upgrade dependency `react@16.12.0`
* Implement `AgGrid` component

### Roxie Server

* Implement `readFile`, `readCsvFile` functions

## [1.9.4]
> Nov 14, 2019

### Roxie Core

* [#35] `onError`, `onComplete` is not working
  * Remove `onError`, `onComplete`, `defaultValue` since it's unused
  * Re-thrown `error` instead of of return `defaultValue`
  * Fix issue in `Subject.complete` function

### Roxie UI

* [#34] Supports to show a dropdown toggle icon on nav-link

## [1.9.3]
> Nov 13, 2019

### Roxie Core

* [#31] Supports `fromQueryString`, `toQueryString` to Roxie.Object
* [#32] Should export Entity, Reader, Writer, Sorter

### Roxie UI

* [#33] Supports sidebar styling

## [1.9.2]
> Nov 12, 2019

### Roxie Core

* [#28] Supports to add `headers` to `HttpParams`
* [#29] Supports to cancel pending requests

### Roxie UI

* [#30] Improve `toastr` methods

## [1.9.0]
> Nov 8, 2019

### Roxie Core

* Supports to generate UUID, Sequential ID
* Supports to create/update/save model
* Supports to sort on store
* [#26] `parseDate` return Invalid Date
* [#27] `Date.format('MMM')` not working

### Roxie UI

* Update `pagination` style
* Update `navbar` style

### Roxie Components

* Implement `Paging` component
* Supports `renderer` function on `Column` component

### Docs

* Update docs

## [1.8.4]
> Nov 4, 2019

### Roxie UI

* Supports `roxie-theme-blue`, `roxie-theme-ios`, `roxie-theme-macos`

## [1.8.3]
> Nov 3, 2019

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