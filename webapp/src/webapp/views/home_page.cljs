(ns webapp.views.home-page
  (:require [ajax.core :refer [GET POST]]
            [reagent.core :as reagent]))

(defn handler [response]
  (.log js/console (str response)))

(defn error-handler [{:keys [status status-text]}]
  (.log js/console (str "error happended: " status " " status-text)))


(defn list-tasks
  []
  (GET "/tasks" {:handler handler
                 :error-handler error-handler}))

(defn post-task
  [task]
  (POST "/tasks" {:handler handler
                  :error-handler error-handler}))

(defn home-page []
  [:div
   [:h2.header "Tasks"]
   [:div.container
    [:div#taskoverview {:class-name "taskoverview"}]]])
