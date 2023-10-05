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

## Selectors in CSS
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
