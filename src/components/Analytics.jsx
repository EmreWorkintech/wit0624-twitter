/* eslint-disable react/prop-types */
function Analytics(props) {
  const { analytics } = props;

  return (
    <div className="flex justify-between text-slate-400 mt-4">
      <div>
        <i className="fa-regular fa-message"></i> {analytics.comment}
      </div>
      <div>
        <i className="fa-regular fa-sync"></i> {analytics.reTweet}
      </div>
      <div>
        <i className="fa-regular fa-heart"></i> {analytics.like}
      </div>
      <div>
        <i className="fa-regular fa-upload"></i>
      </div>
      <div>
        <i className="fa-regular fa-chart-simple"></i>
      </div>
    </div>
  );
}

export default Analytics;
