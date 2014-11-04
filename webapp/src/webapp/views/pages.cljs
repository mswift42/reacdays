(ns webapp.views.pages
  (:require [webapp.views.home-page :refer [home-page]]
            [webapp.views.about-page :refer [about-page]]))

(def pages {:home-page home-page
            :about-page about-page})
