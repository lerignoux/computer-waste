# computer-waste

A simple information page on how much your screen consume when not turning off during the night.  
done for and during the 2020/04/22 Earth day to help awareness  


# Consumption evalutation:

## Values
* Screen average consumption: 30W
* Screen unused time (night, out of office time) 10h + weekends (~60h)
* oil kWh mass equivalent = 0.086kg: to produce 1kWH one need to burn around 0.086kg of oil
* oil average density 0.9 (so 0.9L / kg): 1kg of oil is around 0.9L

## Computation :
1 screen consumption per hour is `0.03 * 1 = 0.03` kWH.  
1kWH of energy can be produced by `0.086*0.9 = 0.0774`L of Oil  
the consumption of 1 screen lit for one hour is equivalent to the energy produced by burning `0.03 * 0.0774  = 0.002322`L of oil.  
  
so to get your equivalence on used energy:  
```
<#screens> * <time lit> * 0.002322 ~ <quantity of oil Burnt>
```

**Remark:**
These values are using averages (found online), a lot of factor influence the consumption.  
Final results should be used as an global idea without too much precision.  


# how to use the tool

see [web-page](laurent.erignoux.fr/computer-waste)

Call the web page with the following query parameters:

* `screenCount`: the number of screens you have
* `screenOff/screenSaver`: the time in seconds before going to sleep or activating the screensaver
  
A first windows bat file has been added to make windows users usage automatic  


# Design & reference:
  Twenty by HTML5 UP
    html5up.net | @ajlkn
    Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)

	Icons:
		Font Awesome (fontawesome.io)

	Other:
		jQuery (jquery.com)
		Scrollex (github.com/ajlkn/jquery.scrollex)
		Responsive Tools (github.com/ajlkn/responsive-tools)
