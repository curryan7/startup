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
