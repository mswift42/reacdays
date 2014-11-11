(ns webapp.views.newtask-page
  (:require [ajax.core :refer [POST]]))


(defn row [label input]
  [:div.row
   [:div.col-md-2 [:label label]]
   [:div.col-md-5 input]])


(def form-template
  [:div
   (row "Summary"
        [:input.form-control {:field :text :id :summary}])
   (row "Content"
        [:textarea.form-control {:field :textarea :id :content}])
   (row "Scheduled"
        [:input.form-control {:field :text :id :scheduled}])
   (row ""
        [:button "Save" {:on-submit (POST "/tasks" {:params (js/FormData. form-element)}) }])])


(defn newtask-page []
  [:div.container
   [:h2.header "New Task"]
   [:div.newtaskform
    form-template]])
