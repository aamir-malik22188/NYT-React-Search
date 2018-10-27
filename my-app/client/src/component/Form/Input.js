import React from "react";

export const Input = props => (
  <div class="card">
    <div class="card-header">
      Search Parameters
    </div>
    <div class="card-body">
      <div className="form-group">
      <label for="searchTerm">Search Term:</label>
        <input className="form-control" {...props} />
    <form>
      <div class="form-group">
        <label for="numberOfArticles">Number of Records to Retrieve</label>
        <select class="form-control" id="exampleFormControlSelect1">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
  <div class="form-group">
    <label for="startYear">Start Year (Optional):</label>
    <input type="number" class="form-control" id="exampleFormControlTextarea1" rows="3"></input>
  </div>
  <div class="form-group">
    <label for="endYear">End Year (Optional)</label>
    <input type="number" class="form-control" id="exampleFormControlTextarea1" rows="3"></input>
  </div>
</form>
<button type="submit" class="btn btn-primary" id="acceptBtn">Search</button>
<button type="submit" class="btn btn-primary" id="clearBtn">Clear Results</button>
  </div>
  </div>
  </div>
);

export default Input;
