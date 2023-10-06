# Notes for Midterm

## Internet
- use 'dig' to find the ip address of something
- use 'traceroute' to determine hops in connections
###TCP/IP layers
- application (HTTPS): functionality like web browsing
- transport(TCP): moving connection information packets
- internet (IP): establishing connections
- link (fiber, hardware): physical connections

## Web servers
- use 'curl' to see HTTP time request

## Domain Names
- use 'whois' to get info about domain name

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
