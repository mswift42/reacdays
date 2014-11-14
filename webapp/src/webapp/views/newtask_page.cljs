(ns webapp.views.newtask-page
  (:require [ajax.core :refer [ajax-request json-request-format
                               json-response-format]]))


(defn row [label input]
  [:div.row
   [:div.col-md-2 [:label label]]
   [:div.col-md-5 input]])

(defn handler [response]
  (.log js/console (str response)))

(defn error-handler [{:keys [status status-text]}]
  (.log js/console (str "error happended: " status " " status-text)))

(defn date-from-string
  [datestring]
  (let [[day month year] (clojure.string/split datestring #"/")]
    (new js/Date year month day)))


(defn post-task
  [summary content scheduled]
  (ajax-request
   {:uri  "/tasks"
    :method :post
    :params {:summary summary :content content :scheduled #(date-from-string scheduled)}
    :format (json-request-format)
    :response-format (json-response-format {:keywords? true})
    :handler handler
    :error-handler error-handler}))

(def form-template
  [:div
   [:form {:class-Name "form-element"}
    (row "Summary"
         [:input.form-control {:field :text :id :summary :name "summary"}])
    (row "Content"
         [:textarea.form-control {:field :textarea :id :content :name "content"}])
    (row "Scheduled"
         [:input.form-control {:field :text :id :scheduled :name "scheduled"}])
    (row ""
         [:input.form-control {:type "button" :value "Save" :on-click (fn []
                                                                        (post-task :summary :content :scheduled))}])]])


(defn newtask-page []
  [:div.container
   [:h2.header "New Task"]
   [:div.newtaskform
    form-template]])
