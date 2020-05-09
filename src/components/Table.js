import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {usersJSON} from '../data';

export default withRouter(class Table extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: usersJSON
		}
	}

	componentDidMount(){
		const { pathname } = this.props.location;
		const sortBy = pathname.substring(1);
		
		this.sortHandler(sortBy);
	}

	componentWillReceiveProps(props) {
		const { sortBy } = props;
		this.sortHandler(sortBy);
	}

	sortHandler(sortBy) {
		const { users } = this.state;

		switch (sortBy) {
			case "age":
				this.setState({ users: users.sort(this.compareByAge) });
				break;
			case "name":
				this.setState({ users: users.sort(this.compareByName) });
				break;
			case "points":
				this.setState({ users: users.sort(this.compareByPoints) });
				break;
			case "rank":
				this.setState({ users: users.sort(this.compareByRank) });
				break;
			default: return;
		}
	}

  // complete the comparators
	compareByAge(a, b) {
		return a.age - b.age;
	}

	compareByName(a, b) {
		return (a.name).localeCompare(b.name);
	}

	compareByPoints(a, b) {
		return a.points - b.points;
	}

	compareByRank(a, b) {
		return a.rank - b.rank;
	}

	render() {
		const {users} = this.state;
		
		const dataRow = ({age, name, points, rank }) => (
			<tr key={rank}>
				<td>{age}</td>
				<td>{name}</td>
				<td>{points}</td>
				<td>{rank}</td>
			</tr>
		);

		const populateData = () => users.map(user => dataRow(user));

		return (<div>
			<table className="table table-striped">
				<thead>
					<tr>
						<th>Age</th>
						<th>Name</th>
						<th>Points</th>
						<th>Rank</th>
					</tr>
				</thead>
				<tbody>{populateData()}</tbody>
			</table>
		</div>)
	}
});
