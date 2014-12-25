(ns webapp.core
  (:require [reagent.core :as reagent :refer [atom]]))

(defonce app-state (atom {:text "Hello, what is the message? "}))


(defn page []
  [:div (@app-state :text) "Some Text"]
  )

(defn home []
  [:nav.top-bar {:data-topbar.role "navigation"}]
  [:h3  "Days - Do all your stuff"])

(defn main []
  (reagent/render-component [page] (.getElementById js/document "app"))
  (reagent/render-component [home] (.getElementById js/document "home")))
