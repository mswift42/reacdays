(ns webapp.views.newtask-page
  (:require [ajax.core :refer [ajax-request json-request-format
                               json-response-format]]
            [reagent.core :refer [atom]]))


(defn row [label input]
  [:div.row
   [:div.col-md-2 [:label label]]
   [:div.col-md-5 input]])

(defn handler [response]
  (.log js/console (str response)))

(defn error-handler [{:keys [status status-text]}]
  (.log js/console (str "error happended: " status " " status-text)))

;; (defn date-from-string
;;   [datestring]
;;   (let [[day month year] (clojure.string/split datestring #"/")]
;;     (new js/Date year (- month 1) day)))

(def tasksummary (atom ""))
(def taskcontent (atom ""))
(def taskscheduled (atom ""))


(defn post-task
  [summary content scheduled]
  (ajax-request
   {:uri  "/tasks"
    :method :post
    :params {:summary summary :content content :scheduled scheduled}
    :format (json-request-format)
    :response-format (json-response-format {:keywords? true
                                            :prefix true})
    :handler handler
    :error-handler error-handler}))



(defn form-template
  []
  [:div
   [:form
    (row "Summary"
         [:input.form-control {:type :text :value @tasksummary
                               :on-change #(reset! tasksummary
                                                   (-> % .-target .-value))}])
    (row "Content"
         [:textarea.form-control {:value @taskcontent
                                  :on-change #(reset! taskcontent
                                                      (-> % .-target .-value))}])
    (row "Scheduled"
         [:input.form-control {:type :date :value @taskscheduled
                               :on-change #(reset! taskscheduled
                                                   (-> % .-target .-value))}])
    (row ""
         [:input.form-control {:type "button" :value "Save" :on-click (fn []
                                                                        (post-task @tasksummary @taskcontent @taskscheduled))}])]])


(defn newtask-page []
  [:div.container
   [:h2.header "New Task"]
   [:div.newtaskform
    [form-template]]])
