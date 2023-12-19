# Notes for Midterm

## Internet
### Making connections:
- need Ip address for device to talk to another
- human friendly names == domain names
- domain names --> IP adress with DNS

  use `dig` in console to find the ip address of something
<img width="721" alt="Screenshot 2023-10-29 at 10 03 06 PM" src="https://github.com/curryan7/startup/assets/103795725/f0ad4424-9b81-4862-a855-4ed83a464b12">
  
  use `traceroute` to determine hops in connections

###TCP/IP layers
- application (HTTPS): functionality like web browsing
- transport(TCP): moving connection information packets
- internet (IP): establishing connections
- link (fiber, hardware): physical connections

## Web servers
definition: a computing device that is hosting a web service that knows how to accept incoming internet connections and speak the HTTP application protocol
- we use gateway so user doesn't need to keep track of port
use `curl` to see HTTP time request
- 

## Domain Names
- use `whois` to get info about domain name

## Caddy
'~/Caddyfile' : determine location where static HTML files are loaded from, proxy requests into services
- never modify unless when you configure the domain name
'~/public_html' director of files that Caddy servers up when requests are made to the root or web server

## CSS
- CSS concerned with defining rulesets
- rule = selector+delcaration with given property value
<img width="302" alt="Screenshot 2023-10-03 at 5 27 23 PM" src="https://github.com/curryan7/startup/assets/103795725/1d2d65df-be51-427d-80e1-ba0a9359d365">

### Ways to attribute CSS with HTML
<img width="581" alt="Screenshot 2023-10-03 at 5 28 12 PM" src="https://github.com/curryan7/startup/assets/103795725/8ec12372-1def-4579-ba67-c4f161124284">
</br>
style element:
<img width="587" alt="Screenshot 2023-10-03 at 5 28 37 PM" src="https://github.com/curryan7/startup/assets/103795725/8f39ac0d-97a7-4688-b9e8-61b27e60cace">
</br>
or link:
<img width="579" alt="Screenshot 2023-10-03 at 5 29 13 PM" src="https://github.com/curryan7/startup/assets/103795725/2c3dba09-5dfb-4d0f-99ed-5936a500a79b">
<img width="582" alt="Screenshot 2023-10-03 at 5 29 25 PM" src="https://github.com/curryan7/startup/assets/103795725/ef9c08e6-5ec1-4bda-b0d9-1030482949a1">

- CSS elements can span or can be specific:
  <img width="583" alt="Screenshot 2023-10-03 at 5 30 09 PM" src="https://github.com/curryan7/startup/assets/103795725/3e9aa541-eafe-4421-ba77-e844cc499210">

### The Box Model
<img width="302" alt="Screenshot 2023-10-03 at 5 30 45 PM" src="https://github.com/curryan7/startup/assets/103795725/bae94970-1a80-437b-992a-e738ee95327e">
- change using 'box-sizing' CSS property

### Selectors in CSS
use an 'element'
<img width="583" alt="Screenshot 2023-10-03 at 5 34 14 PM" src="https://github.com/curryan7/startup/assets/103795725/a83736fb-c625-416b-a566-57238f79082b">
<img width="582" alt="Screenshot 2023-10-03 at 5 34 22 PM" src="https://github.com/curryan7/startup/assets/103795725/c430a08c-1770-44c9-a507-8f98f6c88d09">

### Combinators (for specific instances)
<img width="589" alt="Screenshot 2023-10-03 at 5 35 38 PM" src="https://github.com/curryan7/startup/assets/103795725/66fee43e-7235-4b53-a263-cf0c8bd3abea">

### Class selectors
goes as '.nameofclass'{}

### ID selector
'#nameofID'{}

### Attribute Selector
<img width="681" alt="Screenshot 2023-10-03 at 5 59 15 PM" src="https://github.com/curryan7/startup/assets/103795725/5c1968e9-6e68-4108-a187-068fd412bee1">

### Pseudo Selector
<img width="839" alt="Screenshot 2023-10-03 at 5 59 49 PM" src="https://github.com/curryan7/startup/assets/103795725/36f06a5d-c569-4efa-b534-b479eb48bcd4">

### declarations
specifies property and value to assign when the rule selector matches one or more elements
![Screenshot 2023-10-04 at 8 40 03 PM](https://github.com/curryan7/startup/assets/103795725/c8a0e9ce-b7a0-40d4-abf9-513cfa2db9f4)

### units
![Screenshot 2023-10-04 at 8 44 12 PM](https://github.com/curryan7/startup/assets/103795725/adf4db89-1cfb-4452-8a93-f2d0c9e2930d)

### color
![Screenshot 2023-10-04 at 8 44 33 PM](https://github.com/curryan7/startup/assets/103795725/b839a706-d407-4186-8be5-8e9a80a37b5d)

### fonts
Four major families:
1) 'serif'
2) 'sans-serif'
3) 'fixed'
4) 'symbol'

importing use: @font-face
![Screenshot 2023-10-04 at 8 46 40 PM](https://github.com/curryan7/startup/assets/103795725/e49651a0-8b9f-4ee7-8809-1b6bf209cc88)

![Screenshot 2023-10-04 at 8 47 04 PM](https://github.com/curryan7/startup/assets/103795725/8bdcda9e-8592-4d33-b64f-c7608e9b1be5)

### responsive design
window resize dynamics
<img width="577" alt="Screenshot 2023-10-05 at 11 56 29 AM" src="https://github.com/curryan7/startup/assets/103795725/55c28394-d35f-492c-9c57-028a09d8d221">
<img width="574" alt="Screenshot 2023-10-05 at 11 56 46 AM" src="https://github.com/curryan7/startup/assets/103795725/2a993d3b-5913-41c2-94cb-6495608b80a2">
<img width="503" alt="Screenshot 2023-10-05 at 11 58 01 AM" src="https://github.com/curryan7/startup/assets/103795725/be2795b9-74a0-45f5-a9dd-dc8ce43d99ac">
<img width="577" alt="Screenshot 2023-10-05 at 11 58 13 AM" src="https://github.com/curryan7/startup/assets/103795725/02ed2647-5d47-4324-8558-05add907d812">
<img width="503" alt="Screenshot 2023-10-05 at 11 58 21 AM" src="https://github.com/curryan7/startup/assets/103795725/db3a54a8-219a-4fcf-8451-133be73064bc">

**use this to be adaptable to mobile devices**
<img width="667" alt="Screenshot 2023-10-05 at 12 00 02 PM" src="https://github.com/curryan7/startup/assets/103795725/88dc16e3-6200-4355-bda6-d72b4b4e64bc">

### float
moves left or right of its container element and allows inline elements to wrap around it
<img width="521" alt="Screenshot 2023-10-05 at 12 02 00 PM" src="https://github.com/curryan7/startup/assets/103795725/77acd498-7caa-4a55-bfec-927ad6b642bc">

### media queries
'@media' detects size and orienation of device
<img width="584" alt="Screenshot 2023-10-05 at 1 46 47 PM" src="https://github.com/curryan7/startup/assets/103795725/88f4b152-abcc-4bf6-b33e-952f4ceefc59">

<img width="589" alt="Screenshot 2023-10-05 at 1 49 32 PM" src="https://github.com/curryan7/startup/assets/103795725/c02eab07-1e1b-4ad5-889d-edec12893f03">

### CSS Grid
<img width="601" alt="Screenshot 2023-10-05 at 1 55 23 PM" src="https://github.com/curryan7/startup/assets/103795725/07a3f32d-bbf1-4b91-bc98-1dc29e4a3d8e">

grid template columns specifies layout of grid
<img width="582" alt="Screenshot 2023-10-05 at 1 58 39 PM" src="https://github.com/curryan7/startup/assets/103795725/ee96d40f-572c-4bbe-ab9d-74ac78039ed7">

### flex
<img width="592" alt="Screenshot 2023-10-06 at 1 09 39 PM" src="https://github.com/curryan7/startup/assets/103795725/ab69411e-51ec-444c-a051-7410b3183b8d">
<img width="550" alt="Screenshot 2023-10-06 at 1 11 50 PM" src="https://github.com/curryan7/startup/assets/103795725/634c4939-3c77-46a3-aa0b-8f689240a5a5">
<img width="593" alt="Screenshot 2023-10-06 at 1 12 56 PM" src="https://github.com/curryan7/startup/assets/103795725/1d937148-d56d-4de9-b66b-1a6520dedd78">
<img width="603" alt="Screenshot 2023-10-06 at 1 13 06 PM" src="https://github.com/curryan7/startup/assets/103795725/a7badb7a-e07f-4575-8e11-a652ec783886">
<img width="627" alt="Screenshot 2023-10-06 at 1 14 33 PM" src="https://github.com/curryan7/startup/assets/103795725/973f8307-1632-4989-9df4-ca3accb86c53">
<img width="617" alt="Screenshot 2023-10-06 at 1 31 45 PM" src="https://github.com/curryan7/startup/assets/103795725/9c74f93e-66e4-4d07-a75c-5bb30ba9e69f">

## JS
<img width="901" alt="Screenshot 2023-10-14 at 10 16 29 PM" src="https://github.com/curryan7/startup/assets/103795725/6ea74c51-6203-4764-8fcc-d29cfec1eb0b">

### comments
/* */ block comment
// line comment

### log
<img width="907" alt="Screenshot 2023-10-14 at 10 18 08 PM" 
 src="https://github.com/curryan7/startup/assets/103795725/a9129154-335a-4188-8ae2-b7376b8251ce">

### timers
<img width="899" alt="Screenshot 2023-10-14 at 10 19 02 PM" src="https://github.com/curryan7/startup/assets/103795725/9adca874-82bd-4605-8774-2e9a0d076476">

### count
see how many block of code called
<img width="895" alt="Screenshot 2023-10-14 at 10 19 29 PM" src="https://github.com/curryan7/startup/assets/103795725/61f193a8-bb5a-45c3-bffb-9e3dfbd28bb6">

### incorporating into HTML
use '<script>' or 'src' to include
example:
<img width="903" alt="Screenshot 2023-10-14 at 10 20 28 PM" src="https://github.com/curryan7/startup/assets/103795725/445d66ce-eba8-465e-9254-2f3fc99c3d3d">
<img width="900" alt="Screenshot 2023-10-14 at 10 21 31 PM" src="https://github.com/curryan7/startup/assets/103795725/3ada8c31-1d5b-4a21-8eea-578e4c401025">

### declaring variables
use 'let' for changing variable
use 'const' for non-changing variable
<img width="900" alt="Screenshot 2023-10-14 at 10 22 40 PM" src="https://github.com/curryan7/startup/assets/103795725/ff374b82-51ea-4c71-8127-f07d241db1dd">

### types of data
<img width="556" alt="Screenshot 2023-10-14 at 10 23 13 PM" src="https://github.com/curryan7/startup/assets/103795725/a81a2c0f-bf32-4892-8a1d-e339eeca895c">
<img width="895" alt="Screenshot 2023-10-14 at 10 23 43 PM" src="https://github.com/curryan7/startup/assets/103795725/a6ed0691-7d94-42a4-8347-e0955376c224">

### object types
<img width="904" alt="Screenshot 2023-10-14 at 10 24 01 PM" src="https://github.com/curryan7/startup/assets/103795725/5444cf5f-de09-4810-a143-5e51edea0285">

<img width="906" alt="Screenshot 2023-10-14 at 10 24 20 PM" src="https://github.com/curryan7/startup/assets/103795725/96a98e41-a0a3-4d78-b072-d1761deb677c">

### type conversions
- variable always needs a type
- variable can change type when assigned to a new value
- or auto converted based in context
- getting unexpected results is especially common with equality operator
 <img width="895" alt="Screenshot 2023-10-14 at 10 26 25 PM" src="https://github.com/curryan7/startup/assets/103795725/db120b0e-bb07-460a-9d1c-5d9c668d7857">
- we use '===' as strict equality to skip the auto-type conversion

### conditionals
- if
- else
- if else
 <img width="690" alt="Screenshot 2023-10-14 at 10 28 04 PM"
   src="https://github.com/curryan7/startup/assets/103795725/45f30f1d-4ae1-4137-bb89-352cc32dcd37">
ternary operator ':' which is a compact if else:
<img width="500" alt="Screenshot 2023-10-14 at 10 28 47 PM" src="https://github.com/curryan7/startup/assets/103795725/cfb38239-24d7-45a3-9c48-9b8f2e4e05f7">
<img width="907" alt="Screenshot 2023-10-14 at 10 29 13 PM" src="https://github.com/curryan7/startup/assets/103795725/27ff20c6-7d5b-4560-83c3-e14bdcd74911">

### loops
- for:
<img width="806" alt="Screenshot 2023-10-14 at 10 29 56 PM" src="https://github.com/curryan7/startup/assets/103795725/fa7495ff-7ed9-4960-9c78-cf8a93a89075">

- for in:
<img width="896" alt="Screenshot 2023-10-14 at 10 31 07 PM" src="https://github.com/curryan7/startup/assets/103795725/39efca06-bf6a-42b5-9881-bcc0c346003e">
<img width="899" alt="Screenshot 2023-10-14 at 10 31 19 PM" src="https://github.com/curryan7/startup/assets/103795725/77a71f9e-3609-4a3f-86a0-7b46818aff64">

- for of:
  <img width="802" alt="Screenshot 2023-10-14 at 10 31 36 PM" src="https://github.com/curryan7/startup/assets/103795725/ccdf4da1-942f-4a60-8185-faf2988244c9">

- while:
<img width="671" alt="Screenshot 2023-10-14 at 10 30 51 PM" src="https://github.com/curryan7/startup/assets/103795725/ebc4ca67-c85e-4568-99b2-430fb810500f">

- do while:
<img width="680" alt="Screenshot 2023-10-14 at 10 30 18 PM" src="https://github.com/curryan7/startup/assets/103795725/61069116-9ba2-4986-841e-db77f8bd8b65">

- switch:
<img width="898" alt="Screenshot 2023-10-14 at 10 31 56 PM" src="https://github.com/curryan7/startup/assets/103795725/5879b6be-1b11-4518-92d0-19e23f3a3bc0">

### strings
' and " are the same
('`') a string literal that may contain JavaScript that is evaluated in place and concatenated into the string. A string literal replacement specifier is declared with a dollar sign followed by a curly brace pair. Anything inside the curly braces is evaluated as JavaScript. You can also use backticks to create multiline strings without having to explicitly escape the newline characters using \n.
<img width="620" alt="Screenshot 2023-10-14 at 10 36 00 PM" src="https://github.com/curryan7/startup/assets/103795725/6f047e81-2efc-44ed-a85b-84d05ffb15ad">

### string functions
<img width="570" alt="Screenshot 2023-10-14 at 10 36 48 PM" src="https://github.com/curryan7/startup/assets/103795725/3ed7e3d9-5f92-4f5a-ac1d-ce306b338bf0">


# MIDTERN STUDY GUIDE

### In the following code, what does the link element do? (HTML)
a link element will display a file based on the file path inserted as its source

### In the following code,  where does a div tag do? (HTML)
The div in div tag stands for divider. The divider will help section off your code creating a scope in which you manipulate the variables.

### In the following code, what is the difference between the #title and .grid selector? (Javascript)

#title targets values that have the id of title

.grid will target values that have the class attribute of "grid"

ids on one element (unique within the document)
. notation can be resued on multiple elements

### In the following code, what is the difference between padding and margin? (CSS)

padding is internal spance while margin is space within

### Given this HTML and this CSS how will the images be displayed using flex? (HTML CSS)

<img width="742" alt="Screenshot 2023-10-30 at 2 14 32 PM" src="https://github.com/curryan7/startup/assets/103795725/c7fb6c37-993a-4c56-9828-e7cd936d8ef0">

<img width="907" alt="Screenshot 2023-10-30 at 2 17 37 PM" src="https://github.com/curryan7/startup/assets/103795725/c979fb74-8c21-430e-a79d-c0b42e81ef1d">

<img width="901" alt="Screenshot 2023-10-30 at 2 17 55 PM" src="https://github.com/curryan7/startup/assets/103795725/76a0f59e-06ac-4dbd-8cfb-a23d4836a8b7">

<img width="905" alt="Screenshot 2023-10-30 at 2 18 25 PM" src="https://github.com/curryan7/startup/assets/103795725/8b3cbda1-b19d-4c06-a156-12e570d6e8b0">



### What does the following padding CSS do? (CSS)

padding in CSS, as referred to below, is used to create space betweeen the content and the inner side of its border. Padding in general will put space on all sides, whereas padding can be specified with terms such as (padding-top, padding-right, etc.)


### What does the following code using arrow syntax function declaration do? (JS)

function_name((parameters) => process of function);

<img width="414" alt="Screenshot 2023-10-30 at 2 23 24 PM" src="https://github.com/curryan7/startup/assets/103795725/2a3595b2-ed72-4452-9f1c-000c95c548ce">

<img width="902" alt="Screenshot 2023-10-30 at 2 26 03 PM" src="https://github.com/curryan7/startup/assets/103795725/4c687e95-4c0f-466c-b29c-480363343b5d">

The point of a debounce function is to only execute a specified function once within a given time window.

<img width="905" alt="Screenshot 2023-10-30 at 2 27 25 PM" src="https://github.com/curryan7/startup/assets/103795725/35bb306b-6a1b-4697-ba26-a390615f5e49">

<img width="910" alt="Screenshot 2023-10-30 at 2 28 16 PM" src="https://github.com/curryan7/startup/assets/103795725/f6f32501-ce55-433d-a159-4f44371df04d">

### What does the following code using map with an array output? (JS)

creating an arry:

<img width="296" alt="Screenshot 2023-10-30 at 2 30 05 PM" src="https://github.com/curryan7/startup/assets/103795725/829df791-11e8-4a5b-a1a8-1cdd9a574cce">

<img width="801" alt="Screenshot 2023-10-30 at 2 30 21 PM" src="https://github.com/curryan7/startup/assets/103795725/642cac07-64d3-4582-ba27-1f75aef50fa4">


### What does the following code output using getElementByID and addEventListener? (Multiple)

getElementByID is a function used to access HTML elements by their id attribute

addEventListener will allow one to add an event tag on an element that will trigger something else should the event happen

<img width="645" alt="Screenshot 2023-10-30 at 2 35 12 PM" src="https://github.com/curryan7/startup/assets/103795725/b4028bd4-7e23-4f2f-9259-9c5e46ce7fce">

### What does the following line of Javascript do using a # selector? (JS)

allows you to select an element with a specific 'id'. Returns the first element in the document witht he specified 'id'

### Which of the following are true? (mark all that are true about the Document Object Models)

DOM= Document Object Models
- object representation of HTML elements that the browser uses to render the display
- browser exposed it to external code to easily dynamically manipulate the HTML

use `document` to see DOM for document the browser is currently rendering
i.e.

<img width="383" alt="Screenshot 2023-10-30 at 1 10 38 AM" src="https://github.com/curryan7/startup/assets/103795725/f6abcd18-2c77-4187-9e18-bb686a2ff9f5">

for everything in an HTML document, there is a node in the DOM (elements, attributes, text, comments, whitespace); big tree with document node at top

<img width="604" alt="Screenshot 2023-10-30 at 1 11 40 AM" src="https://github.com/curryan7/startup/assets/103795725/7801d409-3f0c-4b01-941a-7c9c0237916e">


**accessing DOM**

- every element in HTML document implements DOM Element interface
- derived from DOM Node Interface
- provides means for iterating child elements, accessing parent elements, and manipulating element's attributes

can start with `document` variable and walk through every element in tree

<img width="320" alt="Screenshot 2023-10-30 at 1 17 39 AM" src="https://github.com/curryan7/startup/assets/103795725/d924979e-99ca-45cb-b795-4f3224229eae">

<img width="630" alt="Screenshot 2023-10-30 at 1 18 06 AM" src="https://github.com/curryan7/startup/assets/103795725/dbeabc12-da3f-4ea5-b8d5-dc7a232fda0a">

**Modifying the DOM**

- supports ability to insert, modify, or delete elements in the DOM

to create an object in DOM:
- create element on DOM
- insert new element into DOM tree by appending it to existing element in tree

<img width="546" alt="Screenshot 2023-10-30 at 1 19 45 AM" src="https://github.com/curryan7/startup/assets/103795725/0c153de3-d662-4f40-8938-0c39c77c4382">

<img width="554" alt="Screenshot 2023-10-30 at 1 19 57 AM" src="https://github.com/curryan7/startup/assets/103795725/0bd1ad3b-0a2f-4825-874b-43c892ecf1a1">

**Injecting HTML**

<img width="627" alt="Screenshot 2023-10-30 at 1 22 03 AM" src="https://github.com/curryan7/startup/assets/103795725/0f6b8517-7491-4aa3-938c-3698ea399ab4">

**Event Listeners**

<img width="636" alt="Screenshot 2023-10-30 at 1 25 16 AM" src="https://github.com/curryan7/startup/assets/103795725/6269ddb2-2ffe-443b-af6d-38b453479af4">



### By default, the HTML span element has a default CSS display property value of: (CSS)

`inline` or `block`


### How would you use CSS to change all the div elements to have a background color of red? (CSS color)

<img width="240" alt="Screenshot 2023-10-29 at 11 40 26 PM" src="https://github.com/curryan7/startup/assets/103795725/f9566085-a7a1-42b6-8537-61269d4b0797">

<img width="936" alt="Screenshot 2023-10-29 at 11 46 57 PM" src="https://github.com/curryan7/startup/assets/103795725/a399d382-c01c-4163-a738-bc16a851314b">

<img width="936" alt="Screenshot 2023-10-29 at 11 47 17 PM" src="https://github.com/curryan7/startup/assets/103795725/e1842606-33f7-4a96-b7a5-3e7e60cc2b87">

<img width="518" alt="Screenshot 2023-10-29 at 11 47 31 PM" src="https://github.com/curryan7/startup/assets/103795725/91eb7b1b-40e0-44e3-aed1-aa0dbc16d04b">

<img width="933" alt="Screenshot 2023-10-29 at 11 47 39 PM" src="https://github.com/curryan7/startup/assets/103795725/d8e3902b-f090-408e-9fd3-d5cacf929e90">


### How would you display an image with a hyperlink in HTML?

use `img` element
specify using `src`
use `alt` that describes the image

<img width="291" alt="Screenshot 2023-10-29 at 11 29 08 PM" src="https://github.com/curryan7/startup/assets/103795725/8f3eed70-ae95-4c12-aab3-bd5721982822">

+url in quotes />

**for audio**

`audio` element
`src` to specifiy url to source audio file
`autoplay` + `loop` to troll the crap out of the user

<img width="394" alt="Screenshot 2023-10-29 at 11 32 24 PM" src="https://github.com/curryan7/startup/assets/103795725/bccb365a-48a1-438d-abbc-9233992145a8">

**for video**
`video` element
`src` for URL
include `controls` and `autoplay` attributes
use `crossorigin="anonymous"` if requesting files from different domain

<img width="602" alt="Screenshot 2023-10-29 at 11 33 45 PM" src="https://github.com/curryan7/startup/assets/103795725/676db244-357b-4dac-bb0b-80f3f205fa4f">

**for internal media**

`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" stroke="red" fill="red" style="border: 1px solid #000000">
  <circle cx="150" cy="100" r="50" />
</svg>`

In the CSS box model, what is the ordering of the box layers starting at the inside and working out?

<img width="302" alt="Screenshot 2023-10-03 at 5 30 45 PM" src="https://github.com/curryan7/startup/assets/103795725/bae94970-1a80-437b-992a-e738ee95327e">


Given the following HTML, what CSS would you use to set the text "troubl" to green and leave the "double" text unaffected?


What will the following code output when executed using a for loop and console.log?


How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green?


What is the opening HTML tag for a:
- paragraph: `<p>`
- ordered list: '<ol>'
- unordered list: `<ul>`
- second level heading: `<h2>`
- first level heading: `<h1>`
- third level heading: `<h3>`

### How do you declare the document type to be html?

`<!DOCTYPE html>`
at the top

### What is valid javascript syntax for if, else, for, while, switch statements?

**primitive datatypes of JS**
<img width="562" alt="Screenshot 2023-10-29 at 11 05 16 PM" src="https://github.com/curryan7/startup/assets/103795725/8cd55b7a-7d00-4cbf-8260-e1c8c504cd23">

**object types**
<img width="649" alt="Screenshot 2023-10-29 at 11 07 00 PM" src="https://github.com/curryan7/startup/assets/103795725/511b8e6d-44f8-4b8f-8fc0-754e9c8e2c60">

weakly type langague: variable always has a type but variable can change type when assigned a new value or that types can be auto converted based upon context used

<img width="275" alt="Screenshot 2023-10-29 at 11 07 26 PM" src="https://github.com/curryan7/startup/assets/103795725/1ce12c7a-51c1-4a64-a99c-a181c8c9452e">

**If:(normal) else**

<img width="299" alt="Screenshot 2023-10-29 at 10 58 56 PM" src="https://github.com/curryan7/startup/assets/103795725/f6777dc7-5e72-45b6-b8b4-a1ee02637215">

(ternary)

<img width="450" alt="Screenshot 2023-10-29 at 11 00 10 PM" src="https://github.com/curryan7/startup/assets/103795725/9604664c-5580-4a26-ad3e-4402096cba41">

(with booleans)

<img width="336" alt="Screenshot 2023-10-29 at 11 00 32 PM" src="https://github.com/curryan7/startup/assets/103795725/72038b9d-d37e-4979-a804-51bff728c9ca">

**for**
- `i++` token

<img width="279" alt="Screenshot 2023-10-29 at 11 02 11 PM" src="https://github.com/curryan7/startup/assets/103795725/54bf8cf7-ee7c-497e-bc64-0517cf096707">

**while**

<img width="270" alt="Screenshot 2023-10-29 at 11 02 35 PM" src="https://github.com/curryan7/startup/assets/103795725/a870a32b-4c57-45be-b250-32069bdad88d">

**do while**

<img width="240" alt="Screenshot 2023-10-29 at 11 02 46 PM" src="https://github.com/curryan7/startup/assets/103795725/82f4d729-8904-4122-a8ef-b37dd883ce86">

**for in**

<img width="296" alt="Screenshot 2023-10-29 at 11 03 01 PM" src="https://github.com/curryan7/startup/assets/103795725/68411e0e-bf21-4647-af9f-e3beb391b8e1">

<img width="371" alt="Screenshot 2023-10-29 at 11 03 15 PM" src="https://github.com/curryan7/startup/assets/103795725/0713821a-d925-47b3-a2fb-e28b4ebd7e2f">


**for of**

<img width="634" alt="Screenshot 2023-10-29 at 11 03 39 PM" src="https://github.com/curryan7/startup/assets/103795725/d3b8607b-3e4a-4905-8c05-cf2ba54c9413">


**break and continue**

<img width="624" alt="Screenshot 2023-10-29 at 11 04 09 PM" src="https://github.com/curryan7/startup/assets/103795725/06a5d472-6d7d-4edf-8186-ce74fa1c9235">


### What is the correct syntax for creating a javascript object?
an object has:
- name must be String or Symbol
- value can be * datatype
- common object-oriented functionality such as constructors
- `this` pointer
- static properties and functions
- inheritance

**How to Create an Object**
- `new` operator

<img width="653" alt="Screenshot 2023-10-29 at 10 44 11 PM" src="https://github.com/curryan7/startup/assets/103795725/def0458d-b7c5-4154-b0cc-17d929780f6c">

**object literals**

<img width="358" alt="Screenshot 2023-10-29 at 10 44 40 PM" src="https://github.com/curryan7/startup/assets/103795725/12c8f1d3-ea1e-4c6c-8323-be518ad26d4b">

**Object Functions**

<img width="510" alt="Screenshot 2023-10-29 at 10 45 02 PM" src="https://github.com/curryan7/startup/assets/103795725/93684013-98b4-4d3f-be0a-f65c578c01ef">

**Constructors:** any function that returns an object `new`

<img width="354" alt="Screenshot 2023-10-29 at 10 45 39 PM" src="https://github.com/curryan7/startup/assets/103795725/023a85eb-6060-41e2-ab06-392eb001d431">

<img width="626" alt="Screenshot 2023-10-29 at 10 46 01 PM" src="https://github.com/curryan7/startup/assets/103795725/27de314e-f64c-4aab-951c-963d59c9f875">

**classes**
reusable objects rather than one-time

<img width="415" alt="Screenshot 2023-10-29 at 10 47 16 PM" src="https://github.com/curryan7/startup/assets/103795725/707da1f6-6fd0-4cdf-84f0-3a1fd9699018">

- make properties and functions of classes private by prefixing them with `#`

<img width="617" alt="Screenshot 2023-10-29 at 10 47 51 PM" src="https://github.com/curryan7/startup/assets/103795725/2bf6cbe1-cf01-4be6-98f2-38be737db601">

**Inheritance**
key commands:
- `extends`
- `super`
  
<img width="506" alt="Screenshot 2023-10-29 at 10 49 33 PM" src="https://github.com/curryan7/startup/assets/103795725/e5f81504-f031-4b15-83c6-a763105c6ccd">

<img width="338" alt="Screenshot 2023-10-29 at 10 54 25 PM" src="https://github.com/curryan7/startup/assets/103795725/710d98eb-774a-4b76-b11f-a60099429a84">

<img width="368" alt="Screenshot 2023-10-29 at 10 54 42 PM" src="https://github.com/curryan7/startup/assets/103795725/bd4fb1b1-48a7-4dc4-b3a4-aeb6b899f9ac">

### Is it possible to add new properties to javascript objects?
Yes, using the dot notation `obj.prop` or bracket notation `obj['prop']` look above

### If you want to include JavaScript on an HTML page, which tag do you use?
use the `<script>` element or use `src` attribute of script element for external JS file

<img width="582" alt="Screenshot 2023-10-29 at 10 38 03 PM" src="https://github.com/curryan7/startup/assets/103795725/32ad15c6-31e8-4c7c-8fbd-452ba4df01df">

code page or just the code within

### Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?

getelementbyID


### Which of the following correctly describes JSON?

stands for JavaScript Object Notation
- used to share and store data utilizing objects

data types:

<img width="278" alt="Screenshot 2023-10-29 at 10 34 09 PM" src="https://github.com/curryan7/startup/assets/103795725/43bb63a8-342a-4d43-85c8-7eb599b45746">


<img width="503" alt="Screenshot 2023-10-29 at 10 35 47 PM" src="https://github.com/curryan7/startup/assets/103795725/ed395ea1-e44c-43d7-80a7-c5a322915679">

<ul>
- contains an object (contain zero or more key value pairs)
- key is always a string
- value is one of above data types
- key value pairs delimited with commas
- curly braces delimit object
- square bracket and commas delimit arrays
- string are ALWAYS delimited with double quotes
</ul>

<p>use `JSON.parse` and `JSON.stringify` to convert JSON to and from JS</p>

<img width="482" alt="Screenshot 2023-10-29 at 10 36 29 PM" src="https://github.com/curryan7/startup/assets/103795725/1344040b-806c-476f-9b76-9612c818c1a3">

### What does the console command:
- chmod: adjust file permissions
- pwd: see what directory you're in
- cd: change directory
- ls: list
- vim: text editor (superior)
- nano: text editor (modest)
- mkdir: create a new directory
- mv: move a directory
- rm: remove a directory
- man: look up a command in the manual
- ssh: create a secure shell on a remote computer
- ps: view the currently running processes
- wget: with a file URL you wish to download to your command prompt
- sudo: execute a command as a super user

<img width="467" alt="Screenshot 2023-10-29 at 10 26 50 PM" src="https://github.com/curryan7/startup/assets/103795725/7290c7e1-559a-4e62-a8c9-04ce3543d288">

<img width="754" alt="Screenshot 2023-10-29 at 10 27 10 PM" src="https://github.com/curryan7/startup/assets/103795725/c2ad7f7c-0785-4b8b-b666-460e61c39d7b">

`ctrl-R` to type to find previous commands
`ctrl-C` to kill current running command


### Which of the following console command creates a remote shell session?
`ssh`

### Which of the following is true when the -la parameter is specified for the ls console command?
it shows a detailed files adn driectories (including hidden files)

![Screenshot 2023-10-30 at 2 40 26 PM](https://github.com/curryan7/startup/assets/103795725/a3d4e89d-0d70-4908-a9df-5cd562954b1f)

### Which of the following is true for the domain name banana.fruit.bozo.click, which is the top level domain, which is a subdomain, which is a root domain?

![domain-name-structure-diagram-1956x936](https://github.com/curryan7/startup/assets/103795725/3e7586c9-bc9f-4bcd-86ed-f8555f9e43b6)


### Is a web certificate is necessary to use HTTPS?
Yes

### Can a DNS A record point to an IP address or another A record?
No


### Port 443, 80, 22 is reserved for which protocol?

443: is for HTTPS
80: is for HTTP
22: is for SSH

### What will the following code using Promises output when executed?

There are three states of promises:
1) pending
2) fulfilled
3) rejected

creating a promies:
- call the promise object constructor
- passing it an executor function that runs the asynchronous operation (use `setTimeout`)
- after time is expired, call the delay function in a `for` loop in the promise executorr and also a `for` loop outside the promise so that both code blocks are running in parallel

promise executor takes two functions as parameters (`reject ` and `resolve`)
resolve leads to `fulfilled` state
reject leads to `rejected` state



<img width="819" alt="Screenshot 2023-10-30 at 2 56 30 PM" src="https://github.com/curryan7/startup/assets/103795725/b1013498-6f37-46d6-a4ad-679da680d46b">

<img width="856" alt="Screenshot 2023-10-30 at 2 58 59 PM" src="https://github.com/curryan7/startup/assets/103795725/70499e0c-4891-43d6-8d1f-690f77a20ff1">

resulting states will lead to something else to happening

`then`: for if it is fulfilled
`catch` for if it is rejected
and `finally` after all the processing is done

<img width="910" alt="Screenshot 2023-10-30 at 3 01 51 PM" src="https://github.com/curryan7/startup/assets/103795725/4182caf7-0fc2-403b-b9de-1edaf8ce03aa">



<img width="753" alt="Screenshot 2023-10-14 at 10 37 04 PM" src="https://github.com/curryan7/startup/assets/103795725/bb7caab7-1c68-4e99-a24a-74cb4b1b602c">

---____-----

# Finals Notes
## What ports are used for HTTP, HTTPS, SSH?
HTTP: port 80
HTTPS: port 443
SSH: 22
![Screenshot 2023-12-19 at 11 11 44 AM](https://github.com/curryan7/startup/assets/103795725/5e3299f9-6673-46cf-a4ec-3a00cad88afc)

## What do HTTP status codes in the 300, 400, 500 range indicate?
300 is for redirection:
1) 300 multiple choices (multiple options for the resource that the client may follow)
2) 301 moved permanently
3) 302 found: temporarily under a new url
4) 304 modified: resource has not been modified since the last request

400 is for client-side errors:
1) 400: bad request (server cannot process due to client)
2) 401 Unauthorized: Authentication is required to access the resource
3) 403 Forbidden: The server understood the request but refuses to authorize it
4) 404 Not Found: The requested resource is not available on the server

500 is for server side errors:
1) 500 Internal Server Error: Generic error message indicating that something has gone wrong on the server
2) 502 Bad Gateway: Indicates that a server acting as a gateway received an invalid response from an inbound server
3) 503 Service Unavailable: The server is currently unable to handle the request due to temporary overloading or maintenance of the server
![Screenshot 2023-12-19 at 11 12 28 AM](https://github.com/curryan7/startup/assets/103795725/6d69dd89-7b7e-4da8-bb2a-ef6c245fe77a)

## What does the HTTP header `content-type` allow you to do?
It helps the receiving end know how to interpret the data by specifying its formatting
![Screenshot 2023-12-19 at 11 13 14 AM](https://github.com/curryan7/startup/assets/103795725/fb9ee4e3-144e-4c55-8653-574c59515e49)

## What does the domain of a cookie do?
specifies which server can receive a cookie
if not specific domain, then available on server, not on subdomains tho

## What does the path of a cookie do?
indicates a URL path that must exist in the requested URL in order to send the Cookie header
![Screenshot 2023-12-19 at 11 17 41 AM](https://github.com/curryan7/startup/assets/103795725/3868e259-fd4d-4849-96f7-56323b74d27d)

## What does the SameSite of a cookie do?
![Screenshot 2023-12-19 at 11 21 06 AM](https://github.com/curryan7/startup/assets/103795725/8dc28ca4-f33b-4a47-91c6-a9ef6b68b7e5)

## What does the HTTPOnly of a cookie do?
![Screenshot 2023-12-19 at 11 22 42 AM](https://github.com/curryan7/startup/assets/103795725/6bbb0a83-bbfe-4350-9c94-2be37d82a0ff)

## How should you store user passwords in a database?
hashcoded

## What is the WebSocket protocol used for?
<img width="959" alt="Screenshot 2023-12-19 at 11 44 24 AM" src="https://github.com/curryan7/startup/assets/103795725/6f42c730-039c-4f96-a59f-a022171218e5">

## What is JSX and how are the curly braces rendered?
JSX is the file variant in which content is rendered in REACT (JS + HTML which is wild right???!!)

curly braces are used to insert JS variables into the HTML of the JSX (markup)

## What are React Hooks used for?

does everything a class style component can do and more without needing to write a class
new features to React added as hooks

![Screenshot 2023-12-19 at 11 59 26 AM](https://github.com/curryan7/startup/assets/103795725/3fff27e4-04da-4cde-93f3-712a60ba901f)

## What is the useEffect hook used for?
allows you to represent lifecycle events (run a function every time a component completes rendering)
<img width="950" alt="Screenshot 2023-12-19 at 12 01 10 PM" src="https://github.com/curryan7/startup/assets/103795725/fadf69f1-28e4-4eef-8054-ac26f8397b9b">

## What role does npm play in web development?
NPM (Node package manager) is to help you utilize preeesxisting packages of JS in your development. The NPM can access a library of packages, retrieve them for installation.

## What does package.json do in a npm project?
1) it contains metadata about your porjects (name, default entry JS file such as index.js)
2) commands (scripts) that you can execute to do things like run, test, or distribute your code
3) contains packages that htis project depends on
   
## What does the fetch function do?
A built-in function that you can call from the JS code running in the browser.
It takes a URL and returns a promise. The `then` function in the promise takes a callback function that is asynchronously called when the requested URL content is obtained. If the returned content is of type application/json you can use the json function on the response object to convert it to a JavaScript object.

<img width="481" alt="Screenshot 2023-12-19 at 12 09 11 PM" src="https://github.com/curryan7/startup/assets/103795725/5c80ce2c-a4bb-4abf-97d1-2977abef3fd0">

## What does node.js do?
it allows JS code to be deployed outside of a browser
<img width="810" alt="Screenshot 2023-12-19 at 12 11 19 PM" src="https://github.com/curryan7/startup/assets/103795725/0d65f0b7-d7c3-4239-b401-0918d81b2deb">

PM2 is the process manager that allows you to keep your application running even when your console is shut off

## What does Vite do?
- bundles code quickly
- easily support JSX, Typescript, and different CSS flavors
- bundles and send code to make a temporary directory to pseudo deploy for react

When you execute npm run dev you are bundling the code to a temporary directory that the Vite debug HTTP server loads from. When you want to bundle your application so that you can deploy to a production environment you need to run npm run build. This executes the build script found in your package.json and invokes the Vite CLI. vite build transpiles, minifies, injects the proper JavaScript, and then outputs everything to a deployment-ready version contained in a distribution subdirectory named dist.
