(ns webapp.views.home-page
  (:require [reagent.core :as reagent]))

(defn handler [[ok response]]
  (if ok
    (let [entries response]
      (.log js/console (str entries))
      (.log js/console (count entries))
      (doseq [entry entries]
        (.log js/console (str entry))))))

(defn error-handler [{:keys [status status-text]}]
  (.log js/console (str "error happended: " status " " status-text)))

(defn xhr-con []
  (new js/XMLHttpRequest))

(def xhr xhr-con)

(defn list-tasks [reply]
  [:div.tasks
   [:div.stask
    (for [r reply]
      [:div.single
       [:p (:summary (js-clj r))]])]])

(defn ajax-json
  []
  (.open xhr  "GET" "/tasks" false)
  (.send xhr null)
  (str (.responseText xhr)))


;; (defn get-tasks
;;   []
;;   (GET "/tasks" {
;;                  :handler handler
;;                  :error-handler error-handler
;;                  :response-format :json}))

;; (defn list-tasks []
;;   (let [tasks (get-tasks)]
;;     (.log js/console (str tasks))
;;     [:div.stask
;;      [:div.sin
;;       [:p (:summary tasks)]]]))


(defn home-page []
  [:div
   [:h2.header "Tasks"]
   [:div.container
    [:div#taskoverview {:class-name "taskoverview"}
     ;; [:button "show tasks" {:on-click #(get-tasks)}]
     ;; [list-tasks]
     [ajax-json]
     ]]])
