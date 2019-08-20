var ROS = {
    "types": {
        "TestAction": {
            "fields": {
                "action_goal": "TestActionGoal",
                "action_result": "TestActionResult",
                "action_feedback": "TestActionFeedback"
            },
            "constants": {}
        },
        "TestActionFeedback": {
            "fields": {
                "header": "Header",
                "status": "actionlib_msgs/GoalStatus",
                "feedback": "TestFeedback"
            },
            "constants": {}
        },
        "TestActionGoal": {
            "fields": {
                "header": "Header",
                "goal_id": "actionlib_msgs/GoalID",
                "goal": "TestGoal"
            },
            "constants": {}
        },
        "TestActionResult": {
            "fields": {
                "header": "Header",
                "status": "actionlib_msgs/GoalStatus",
                "result": "TestResult"
            },
            "constants": {}
        },
        "TestFeedback": {
            "fields": {
                "feedback": "int32"
            },
            "constants": {}
        },
        "TestGoal": {
            "fields": {
                "goal": "int32"
            },
            "constants": {}
        },
        "TestRequestAction": {
            "fields": {
                "action_goal": "TestRequestActionGoal",
                "action_result": "TestRequestActionResult",
                "action_feedback": "TestRequestActionFeedback"
            },
            "constants": {}
        },
        "TestRequestActionFeedback": {
            "fields": {
                "header": "Header",
                "status": "actionlib_msgs/GoalStatus",
                "feedback": "TestRequestFeedback"
            },
            "constants": {}
        },
        "TestRequestActionGoal": {
            "fields": {
                "header": "Header",
                "goal_id": "actionlib_msgs/GoalID",
                "goal": "TestRequestGoal"
            },
            "constants": {}
        },
        "TestRequestActionResult": {
            "fields": {
                "header": "Header",
                "status": "actionlib_msgs/GoalStatus",
                "result": "TestRequestResult"
            },
            "constants": {}
        },
        "TestRequestFeedback": {
            "fields": {},
            "constants": {}
        },
        "TestRequestGoal": {
            "fields": {
                "terminate_status": "int32",
                "ignore_cancel": "bool",
                "result_text": "string",
                "the_result": "int32",
                "is_simple_client": "bool",
                "delay_accept": "duration",
                "delay_terminate": "duration",
                "pause_status": "duration"
            },
            "constants": {
                "TERMINATE_SUCCESS": 0,
                "TERMINATE_ABORTED": 1,
                "TERMINATE_REJECTED": 2,
                "TERMINATE_LOSE": 3,
                "TERMINATE_DROP": 4,
                "TERMINATE_EXCEPTION": 5
            }
        },
        "TestRequestResult": {
            "fields": {
                "the_result": "int32",
                "is_simple_server": "bool"
            },
            "constants": {}
        },
        "TestResult": {
            "fields": {
                "result": "int32"
            },
            "constants": {}
        },
        "TwoIntsAction": {
            "fields": {
                "action_goal": "TwoIntsActionGoal",
                "action_result": "TwoIntsActionResult",
                "action_feedback": "TwoIntsActionFeedback"
            },
            "constants": {}
        },
        "TwoIntsActionFeedback": {
            "fields": {
                "header": "Header",
                "status": "actionlib_msgs/GoalStatus",
                "feedback": "TwoIntsFeedback"
            },
            "constants": {}
        },
        "TwoIntsActionGoal": {
            "fields": {
                "header": "Header",
                "goal_id": "actionlib_msgs/GoalID",
                "goal": "TwoIntsGoal"
            },
            "constants": {}
        },
        "TwoIntsActionResult": {
            "fields": {
                "header": "Header",
                "status": "actionlib_msgs/GoalStatus",
                "result": "TwoIntsResult"
            },
            "constants": {}
        },
        "TwoIntsFeedback": {
            "fields": {},
            "constants": {}
        },
        "TwoIntsGoal": {
            "fields": {
                "a": "int64",
                "b": "int64"
            },
            "constants": {}
        },
        "TwoIntsResult": {
            "fields": {
                "sum": "int64"
            },
            "constants": {}
        },
        "GoalID": {
            "fields": {
                "stamp": "time",
                "id": "string"
            },
            "constants": {}
        },
        "GoalStatus": {
            "fields": {
                "goal_id": "GoalID",
                "status": "uint8",
                "text": "string"
            },
            "constants": {
                "PENDING": 0,
                "ACTIVE": 1,
                "PREEMPTED": 2,
                "SUCCEEDED": 3,
                "ABORTED": 4,
                "REJECTED": 5,
                "PREEMPTING": 6,
                "RECALLING": 7,
                "RECALLED": 8,
                "LOST": 9
            }
        },
        "GoalStatusArray": {
            "fields": {
                "header": "Header",
                "status_list": "GoalStatus[]"
            },
            "constants": {}
        },
        "AveragingAction": {
            "fields": {
                "action_goal": "AveragingActionGoal",
                "action_result": "AveragingActionResult",
                "action_feedback": "AveragingActionFeedback"
            },
            "constants": {}
        },
        "AveragingActionFeedback": {
            "fields": {
                "header": "Header",
                "status": "actionlib_msgs/GoalStatus",
                "feedback": "AveragingFeedback"
            },
            "constants": {}
        },
        "AveragingActionGoal": {
            "fields": {
                "header": "Header",
                "goal_id": "actionlib_msgs/GoalID",
                "goal": "AveragingGoal"
            },
            "constants": {}
        },
        "AveragingActionResult": {
            "fields": {
                "header": "Header",
                "status": "actionlib_msgs/GoalStatus",
                "result": "AveragingResult"
            },
            "constants": {}
        },
        "AveragingFeedback": {
            "fields": {
                "sample": "int32",
                "data": "float32",
                "mean": "float32",
                "std_dev": "float32"
            },
            "constants": {}
        },
        "AveragingGoal": {
            "fields": {
                "samples": "int32"
            },
            "constants": {}
        },
        "AveragingResult": {
            "fields": {
                "mean": "float32",
                "std_dev": "float32"
            },
            "constants": {}
        },
        "FibonacciAction": {
            "fields": {
                "action_goal": "FibonacciActionGoal",
                "action_result": "FibonacciActionResult",
                "action_feedback": "FibonacciActionFeedback"
            },
            "constants": {}
        },
        "FibonacciActionFeedback": {
            "fields": {
                "header": "Header",
                "status": "actionlib_msgs/GoalStatus",
                "feedback": "FibonacciFeedback"
            },
            "constants": {}
        },
        "FibonacciActionGoal": {
            "fields": {
                "header": "Header",
                "goal_id": "actionlib_msgs/GoalID",
                "goal": "FibonacciGoal"
            },
            "constants": {}
        },
        "FibonacciActionResult": {
            "fields": {
                "header": "Header",
                "status": "actionlib_msgs/GoalStatus",
                "result": "FibonacciResult"
            },
            "constants": {}
        },
        "FibonacciFeedback": {
            "fields": {
                "sequence": "int32[]"
            },
            "constants": {}
        },
        "FibonacciGoal": {
            "fields": {
                "order": "int32"
            },
            "constants": {}
        },
        "FibonacciResult": {
            "fields": {
                "sequence": "int32[]"
            },
            "constants": {}
        },
        "Position2DInt": {
            "fields": {
                "x": "int64",
                "y": "int64"
            },
            "constants": {}
        },
        "Constants": {
            "fields": {},
            "constants": {
                "DEAD_PUBLISH_PERIOD": 0.05,
                "DEFAULT_CONNECT_TIMEOUT": 10,
                "DEFAULT_HEARTBEAT_TIMEOUT": 4,
                "DEFAULT_DISCONNECT_TIMEOUT": 2,
                "DEFAULT_HEARTBEAT_PERIOD": 1,
                "DISABLE_HEARTBEAT_TIMEOUT_PARAM": "/bond_disable_heartbeat_timeout"
            }
        },
        "Status": {
            "fields": {
                "header": "Header",
                "id": "string",
                "instance_id": "string",
                "active": "bool",
                "heartbeat_timeout": "float32",
                "heartbeat_period": "float32"
            },
            "constants": {}
        },
        "FollowJointTrajectoryAction": {
            "fields": {
                "action_goal": "FollowJointTrajectoryActionGoal",
                "action_result": "FollowJointTrajectoryActionResult",
                "action_feedback": "FollowJointTrajectoryActionFeedback"
            },
            "constants": {}
        },
        "FollowJointTrajectoryActionFeedback": {
            "fields": {
                "header": "Header",
                "status": "actionlib_msgs/GoalStatus",
                "feedback": "FollowJointTrajectoryFeedback"
            },
            "constants": {}
        },
        "FollowJointTrajectoryActionGoal": {
            "fields": {
                "header": "Header",
                "goal_id": "actionlib_msgs/GoalID",
                "goal": "FollowJointTrajectoryGoal"
            },
            "constants": {}
        },
        "FollowJointTrajectoryActionResult": {
            "fields": {
                "header": "Header",
                "status": "actionlib_msgs/GoalStatus",
                "result": "FollowJointTrajectoryResult"
            },
            "constants": {}
        },
        "FollowJointTrajectoryFeedback": {
            "fields": {
                "header": "Header",
                "joint_names": "string[]",
                "desired": "trajectory_msgs/JointTrajectoryPoint",
                "actual": "trajectory_msgs/JointTrajectoryPoint",
                "error": "trajectory_msgs/JointTrajectoryPoint"
            },
            "constants": {}
        },
        "FollowJointTrajectoryGoal": {
            "fields": {
                "trajectory": "trajectory_msgs/JointTrajectory",
                "path_tolerance": "JointTolerance[]",
                "goal_tolerance": "JointTolerance[]",
                "goal_time_tolerance": "duration"
            },
            "constants": {}
        },
        "FollowJointTrajectoryResult": {
            "fields": {
                "error_code": "int32",
                "error_string": "string"
            },
            "constants": {
                "SUCCESSFUL": 0,
                "INVALID_GOAL": -1,
                "INVALID_JOINTS": -2,
                "OLD_HEADER_TIMESTAMP": -3,
                "PATH_TOLERANCE_VIOLATED": -4,
                "GOAL_TOLERANCE_VIOLATED": -5
            }
        },
        "GripperCommand": {
            "fields": {
                "position": "float64",
                "max_effort": "float64"
            },
            "constants": {}
        },
        "GripperCommandAction": {
            "fields": {
                "action_goal": "GripperCommandActionGoal",
                "action_result": "GripperCommandActionResult",
                "action_feedback": "GripperCommandActionFeedback"
            },
            "constants": {}
        },
        "GripperCommandActionFeedback": {
            "fields": {
                "header": "Header",
                "status": "actionlib_msgs/GoalStatus",
                "feedback": "GripperCommandFeedback"
            },
            "constants": {}
        },
        "GripperCommandActionGoal": {
            "fields": {
                "header": "Header",
                "goal_id": "actionlib_msgs/GoalID",
                "goal": "GripperCommandGoal"
            },
            "constants": {}
        },
        "GripperCommandActionResult": {
            "fields": {
                "header": "Header",
                "status": "actionlib_msgs/GoalStatus",
                "result": "GripperCommandResult"
            },
            "constants": {}
        },
        "GripperCommandFeedback": {
            "fields": {
                "position": "float64",
                "effort": "float64",
                "stalled": "bool",
                "reached_goal": "bool"
            },
            "constants": {}
        },
        "GripperCommandGoal": {
            "fields": {
                "command": "GripperCommand"
            },
            "constants": {}
        },
        "GripperCommandResult": {
            "fields": {
                "position": "float64",
                "effort": "float64",
                "stalled": "bool",
                "reached_goal": "bool"
            },
            "constants": {}
        },
        "JointControllerState": {
            "fields": {
                "header": "Header",
                "set_point": "float64",
                "process_value": "float64",
                "process_value_dot": "float64",
                "error": "float64",
                "time_step": "float64",
                "command": "float64",
                "p": "float64",
                "i": "float64",
                "d": "float64",
                "i_clamp": "float64",
                "antiwindup": "bool"
            },
            "constants": {}
        },
        "JointJog": {
            "fields": {
                "header": "Header",
                "joint_names": "string[]",
                "displacements": "float64[]",
                "velocities": "float64[]",
                "duration": "float64"
            },
            "constants": {}
        },
        "JointTolerance": {
            "fields": {
                "name": "string",
                "position": "float64",
                "velocity": "float64",
                "acceleration": "float64"
            },
            "constants": {}
        },
        "JointTrajectoryAction": {
            "fields": {
                "action_goal": "JointTrajectoryActionGoal",
                "action_result": "JointTrajectoryActionResult",
                "action_feedback": "JointTrajectoryActionFeedback"
            },
            "constants": {}
        },
        "JointTrajectoryActionFeedback": {
            "fields": {
                "header": "Header",
                "status": "actionlib_msgs/GoalStatus",
                "feedback": "JointTrajectoryFeedback"
            },
            "constants": {}
        },
        "JointTrajectoryActionGoal": {
            "fields": {
                "header": "Header",
                "goal_id": "actionlib_msgs/GoalID",
                "goal": "JointTrajectoryGoal"
            },
            "constants": {}
        },
        "JointTrajectoryActionResult": {
            "fields": {
                "header": "Header",
                "status": "actionlib_msgs/GoalStatus",
                "result": "JointTrajectoryResult"
            },
            "constants": {}
        },
        "JointTrajectoryControllerState": {
            "fields": {
                "header": "Header",
                "joint_names": "string[]",
                "desired": "trajectory_msgs/JointTrajectoryPoint",
                "actual": "trajectory_msgs/JointTrajectoryPoint",
                "error": "trajectory_msgs/JointTrajectoryPoint"
            },
            "constants": {}
        },
        "JointTrajectoryFeedback": {
            "fields": {},
            "constants": {}
        },
        "JointTrajectoryGoal": {
            "fields": {
                "trajectory": "trajectory_msgs/JointTrajectory"
            },
            "constants": {}
        },
        "JointTrajectoryResult": {
            "fields": {},
            "constants": {}
        },
        "PidState": {
            "fields": {
                "header": "Header",
                "timestep": "duration",
                "error": "float64",
                "error_dot": "float64",
                "p_error": "float64",
                "i_error": "float64",
                "d_error": "float64",
                "p_term": "float64",
                "i_term": "float64",
                "d_term": "float64",
                "i_max": "float64",
                "i_min": "float64",
                "output": "float64"
            },
            "constants": {}
        },
        "PointHeadAction": {
            "fields": {
                "action_goal": "PointHeadActionGoal",
                "action_result": "PointHeadActionResult",
                "action_feedback": "PointHeadActionFeedback"
            },
            "constants": {}
        },
        "PointHeadActionFeedback": {
            "fields": {
                "header": "Header",
                "status": "actionlib_msgs/GoalStatus",
                "feedback": "PointHeadFeedback"
            },
            "constants": {}
        },
        "PointHeadActionGoal": {
            "fields": {
                "header": "Header",
                "goal_id": "actionlib_msgs/GoalID",
                "goal": "PointHeadGoal"
            },
            "constants": {}
        },
        "PointHeadActionResult": {
            "fields": {
                "header": "Header",
                "status": "actionlib_msgs/GoalStatus",
                "result": "PointHeadResult"
            },
            "constants": {}
        },
        "PointHeadFeedback": {
            "fields": {
                "pointing_angle_error": "float64"
            },
            "constants": {}
        },
        "PointHeadGoal": {
            "fields": {
                "target": "geometry_msgs/PointStamped",
                "pointing_axis": "geometry_msgs/Vector3",
                "pointing_frame": "string",
                "min_duration": "duration",
                "max_velocity": "float64"
            },
            "constants": {}
        },
        "PointHeadResult": {
            "fields": {},
            "constants": {}
        },
        "SingleJointPositionAction": {
            "fields": {
                "action_goal": "SingleJointPositionActionGoal",
                "action_result": "SingleJointPositionActionResult",
                "action_feedback": "SingleJointPositionActionFeedback"
            },
            "constants": {}
        },
        "SingleJointPositionActionFeedback": {
            "fields": {
                "header": "Header",
                "status": "actionlib_msgs/GoalStatus",
                "feedback": "SingleJointPositionFeedback"
            },
            "constants": {}
        },
        "SingleJointPositionActionGoal": {
            "fields": {
                "header": "Header",
                "goal_id": "actionlib_msgs/GoalID",
                "goal": "SingleJointPositionGoal"
            },
            "constants": {}
        },
        "SingleJointPositionActionResult": {
            "fields": {
                "header": "Header",
                "status": "actionlib_msgs/GoalStatus",
                "result": "SingleJointPositionResult"
            },
            "constants": {}
        },
        "SingleJointPositionFeedback": {
            "fields": {
                "header": "Header",
                "position": "float64",
                "velocity": "float64",
                "error": "float64"
            },
            "constants": {}
        },
        "SingleJointPositionGoal": {
            "fields": {
                "position": "float64",
                "min_duration": "duration",
                "max_velocity": "float64"
            },
            "constants": {}
        },
        "SingleJointPositionResult": {
            "fields": {},
            "constants": {}
        },
        "ControllerState": {
            "fields": {
                "name": "string",
                "state": "string",
                "type": "string",
                "claimed_resources": "controller_manager_msgs/HardwareInterfaceResources[]"
            },
            "constants": {}
        },
        "ControllerStatistics": {
            "fields": {
                "name": "string",
                "type": "string",
                "timestamp": "time",
                "running": "bool",
                "max_time": "duration",
                "mean_time": "duration",
                "variance_time": "duration",
                "num_control_loop_overruns": "int32",
                "time_last_control_loop_overrun": "time"
            },
            "constants": {}
        },
        "ControllersStatistics": {
            "fields": {
                "header": "std_msgs/Header",
                "controller": "controller_manager_msgs/ControllerStatistics[]"
            },
            "constants": {}
        },
        "HardwareInterfaceResources": {
            "fields": {
                "hardware_interface": "string",
                "resources": "string[]"
            },
            "constants": {}
        },
        "VoxelGrid": {
            "fields": {
                "header": "Header",
                "data": "uint32[]",
                "origin": "geometry_msgs/Point32",
                "resolutions": "geometry_msgs/Vector3",
                "size_x": "uint32",
                "size_y": "uint32",
                "size_z": "uint32"
            },
            "constants": {}
        },
        "DiagnosticArray": {
            "fields": {
                "header": "Header",
                "status": "DiagnosticStatus[]"
            },
            "constants": {}
        },
        "DiagnosticStatus": {
            "fields": {
                "level": "byte",
                "name": "string",
                "message": "string",
                "hardware_id": "string",
                "values": "KeyValue[]"
            },
            "constants": {
                "OK": 0,
                "WARN": 1,
                "ERROR": 2,
                "STALE": 3
            }
        },
        "KeyValue": {
            "fields": {
                "key": "string",
                "value": "string"
            },
            "constants": {}
        },
        "BoolParameter": {
            "fields": {
                "name": "string",
                "value": "bool"
            },
            "constants": {}
        },
        "Config": {
            "fields": {
                "bools": "BoolParameter[]",
                "ints": "IntParameter[]",
                "strs": "StrParameter[]",
                "doubles": "DoubleParameter[]",
                "groups": "GroupState[]"
            },
            "constants": {}
        },
        "ConfigDescription": {
            "fields": {
                "groups": "Group[]",
                "max": "Config",
                "min": "Config",
                "dflt": "Config"
            },
            "constants": {}
        },
        "DoubleParameter": {
            "fields": {
                "name": "string",
                "value": "float64"
            },
            "constants": {}
        },
        "Group": {
            "fields": {
                "name": "string",
                "type": "string",
                "parameters": "ParamDescription[]",
                "parent": "int32",
                "id": "int32"
            },
            "constants": {}
        },
        "GroupState": {
            "fields": {
                "name": "string",
                "state": "bool",
                "id": "int32",
                "parent": "int32"
            },
            "constants": {}
        },
        "IntParameter": {
            "fields": {
                "name": "string",
                "value": "int32"
            },
            "constants": {}
        },
        "ParamDescription": {
            "fields": {
                "name": "string",
                "type": "string",
                "level": "uint32",
                "description": "string",
                "edit_method": "string"
            },
            "constants": {}
        },
        "SensorLevels": {
            "fields": {},
            "constants": {
                "RECONFIGURE_CLOSE": 3,
                "RECONFIGURE_STOP": 1,
                "RECONFIGURE_RUNNING": 0
            }
        },
        "StrParameter": {
            "fields": {
                "name": "string",
                "value": "string"
            },
            "constants": {}
        },
        "ContactState": {
            "fields": {
                "info": "string",
                "collision1_name": "string",
                "collision2_name": "string",
                "wrenches": "geometry_msgs/Wrench[]",
                "total_wrench": "geometry_msgs/Wrench",
                "contact_positions": "geometry_msgs/Vector3[]",
                "contact_normals": "geometry_msgs/Vector3[]",
                "depths": "float64[]"
            },
            "constants": {}
        },
        "ContactsState": {
            "fields": {
                "header": "Header",
                "states": "gazebo_msgs/ContactState[]"
            },
            "constants": {}
        },
        "LinkState": {
            "fields": {
                "link_name": "string",
                "pose": "geometry_msgs/Pose",
                "twist": "geometry_msgs/Twist",
                "reference_frame": "string"
            },
            "constants": {}
        },
        "LinkStates": {
            "fields": {
                "name": "string[]",
                "pose": "geometry_msgs/Pose[]",
                "twist": "geometry_msgs/Twist[]"
            },
            "constants": {}
        },
        "ModelState": {
            "fields": {
                "model_name": "string",
                "pose": "geometry_msgs/Pose",
                "twist": "geometry_msgs/Twist",
                "reference_frame": "string"
            },
            "constants": {}
        },
        "ModelStates": {
            "fields": {
                "name": "string[]",
                "pose": "geometry_msgs/Pose[]",
                "twist": "geometry_msgs/Twist[]"
            },
            "constants": {}
        },
        "ODEJointProperties": {
            "fields": {
                "damping": "float64[]",
                "hiStop": "float64[]",
                "loStop": "float64[]",
                "erp": "float64[]",
                "cfm": "float64[]",
                "stop_erp": "float64[]",
                "stop_cfm": "float64[]",
                "fudge_factor": "float64[]",
                "fmax": "float64[]",
                "vel": "float64[]"
            },
            "constants": {}
        },
        "ODEPhysics": {
            "fields": {
                "auto_disable_bodies": "bool",
                "sor_pgs_precon_iters": "uint32",
                "sor_pgs_iters": "uint32",
                "sor_pgs_rms_error_tol": "float64",
                "contact_surface_layer": "float64",
                "contact_max_correcting_vel": "float64",
                "cfm": "float64",
                "erp": "float64",
                "max_contacts": "uint32"
            },
            "constants": {
                "sor_pgs_w": null
            }
        },
        "WorldState": {
            "fields": {
                "header": "Header",
                "name": "string[]",
                "pose": "geometry_msgs/Pose[]",
                "twist": "geometry_msgs/Twist[]",
                "wrench": "geometry_msgs/Wrench[]"
            },
            "constants": {}
        },
        "Accel": {
            "fields": {
                "linear": "Vector3",
                "angular": "Vector3"
            },
            "constants": {}
        },
        "AccelStamped": {
            "fields": {
                "header": "Header",
                "accel": "Accel"
            },
            "constants": {}
        },
        "AccelWithCovariance": {
            "fields": {
                "accel": "Accel",
                "covariance": "float64[36]"
            },
            "constants": {}
        },
        "AccelWithCovarianceStamped": {
            "fields": {
                "header": "Header",
                "accel": "AccelWithCovariance"
            },
            "constants": {}
        },
        "Inertia": {
            "fields": {
                "m": "float64",
                "com": "geometry_msgs/Vector3",
                "ixx": "float64",
                "ixy": "float64",
                "ixz": "float64",
                "iyy": "float64",
                "iyz": "float64",
                "izz": "float64"
            },
            "constants": {}
        },
        "InertiaStamped": {
            "fields": {
                "header": "Header",
                "inertia": "Inertia"
            },
            "constants": {}
        },
        "Point": {
            "fields": {
                "x": "float64",
                "y": "float64",
                "z": "float64"
            },
            "constants": {}
        },
        "Point32": {
            "fields": {
                "x": "float32",
                "y": "float32",
                "z": "float32"
            },
            "constants": {}
        },
        "PointStamped": {
            "fields": {
                "header": "Header",
                "point": "Point"
            },
            "constants": {}
        },
        "Polygon": {
            "fields": {
                "points": "Point32[]"
            },
            "constants": {}
        },
        "PolygonStamped": {
            "fields": {
                "header": "Header",
                "polygon": "Polygon"
            },
            "constants": {}
        },
        "Pose": {
            "fields": {
                "x": "float32",
                "y": "float32",
                "theta": "float32",
                "linear_velocity": "float32",
                "angular_velocity": "float32"
            },
            "constants": {}
        },
        "Pose2D": {
            "fields": {
                "x": "float64",
                "y": "float64",
                "theta": "float64"
            },
            "constants": {}
        },
        "PoseArray": {
            "fields": {
                "header": "Header",
                "poses": "Pose[]"
            },
            "constants": {}
        },
        "PoseStamped": {
            "fields": {
                "header": "Header",
                "pose": "Pose"
            },
            "constants": {}
        },
        "PoseWithCovariance": {
            "fields": {
                "pose": "Pose",
                "covariance": "float64[36]"
            },
            "constants": {}
        },
        "PoseWithCovarianceStamped": {
            "fields": {
                "header": "Header",
                "pose": "PoseWithCovariance"
            },
            "constants": {}
        },
        "Quaternion": {
            "fields": {
                "x": "float64",
                "y": "float64",
                "z": "float64",
                "w": "float64"
            },
            "constants": {}
        },
        "QuaternionStamped": {
            "fields": {
                "header": "Header",
                "quaternion": "Quaternion"
            },
            "constants": {}
        },
        "Transform": {
            "fields": {
                "translation": "Vector3",
                "rotation": "Quaternion"
            },
            "constants": {}
        },
        "TransformStamped": {
            "fields": {
                "header": "Header",
                "child_frame_id": "string",
                "transform": "Transform"
            },
            "constants": {}
        },
        "Twist": {
            "fields": {
                "linear": "Vector3",
                "angular": "Vector3"
            },
            "constants": {}
        },
        "TwistStamped": {
            "fields": {
                "header": "Header",
                "twist": "Twist"
            },
            "constants": {}
        },
        "TwistWithCovariance": {
            "fields": {
                "twist": "Twist",
                "covariance": "float64[36]"
            },
            "constants": {}
        },
        "TwistWithCovarianceStamped": {
            "fields": {
                "header": "Header",
                "twist": "TwistWithCovariance"
            },
            "constants": {}
        },
        "Vector3": {
            "fields": {
                "x": "float64",
                "y": "float64",
                "z": "float64"
            },
            "constants": {}
        },
        "Vector3Stamped": {
            "fields": {
                "header": "Header",
                "vector": "Vector3"
            },
            "constants": {}
        },
        "Wrench": {
            "fields": {
                "force": "Vector3",
                "torque": "Vector3"
            },
            "constants": {}
        },
        "WrenchStamped": {
            "fields": {
                "header": "Header",
                "wrench": "Wrench"
            },
            "constants": {}
        },
        "OccupancyGridUpdate": {
            "fields": {
                "header": "Header",
                "x": "int32",
                "y": "int32",
                "width": "uint32",
                "height": "uint32",
                "data": "int8[]"
            },
            "constants": {}
        },
        "PointCloud2Update": {
            "fields": {
                "header": "Header",
                "type": "uint32",
                "points": "sensor_msgs/PointCloud2"
            },
            "constants": {
                "ADD": 0,
                "DELETE": 1
            }
        },
        "ProjectedMap": {
            "fields": {
                "map": "nav_msgs/OccupancyGrid",
                "min_z": "float64",
                "max_z": "float64"
            },
            "constants": {}
        },
        "ProjectedMapInfo": {
            "fields": {
                "frame_id": "string",
                "x": "float64",
                "y": "float64",
                "width": "float64",
                "height": "float64",
                "min_z": "float64",
                "max_z": "float64"
            },
            "constants": {}
        },
        "MoveBaseAction": {
            "fields": {
                "action_goal": "MoveBaseActionGoal",
                "action_result": "MoveBaseActionResult",
                "action_feedback": "MoveBaseActionFeedback"
            },
            "constants": {}
        },
        "MoveBaseActionFeedback": {
            "fields": {
                "header": "Header",
                "status": "actionlib_msgs/GoalStatus",
                "feedback": "MoveBaseFeedback"
            },
            "constants": {}
        },
        "MoveBaseActionGoal": {
            "fields": {
                "header": "Header",
                "goal_id": "actionlib_msgs/GoalID",
                "goal": "MoveBaseGoal"
            },
            "constants": {}
        },
        "MoveBaseActionResult": {
            "fields": {
                "header": "Header",
                "status": "actionlib_msgs/GoalStatus",
                "result": "MoveBaseResult"
            },
            "constants": {}
        },
        "MoveBaseFeedback": {
            "fields": {
                "base_position": "geometry_msgs/PoseStamped"
            },
            "constants": {}
        },
        "MoveBaseGoal": {
            "fields": {
                "target_pose": "geometry_msgs/PoseStamped"
            },
            "constants": {}
        },
        "MoveBaseResult": {
            "fields": {},
            "constants": {}
        },
        "GetMapAction": {
            "fields": {
                "action_goal": "GetMapActionGoal",
                "action_result": "GetMapActionResult",
                "action_feedback": "GetMapActionFeedback"
            },
            "constants": {}
        },
        "GetMapActionFeedback": {
            "fields": {
                "header": "Header",
                "status": "actionlib_msgs/GoalStatus",
                "feedback": "GetMapFeedback"
            },
            "constants": {}
        },
        "GetMapActionGoal": {
            "fields": {
                "header": "Header",
                "goal_id": "actionlib_msgs/GoalID",
                "goal": "GetMapGoal"
            },
            "constants": {}
        },
        "GetMapActionResult": {
            "fields": {
                "header": "Header",
                "status": "actionlib_msgs/GoalStatus",
                "result": "GetMapResult"
            },
            "constants": {}
        },
        "GetMapFeedback": {
            "fields": {},
            "constants": {}
        },
        "GetMapGoal": {
            "fields": {},
            "constants": {}
        },
        "GetMapResult": {
            "fields": {
                "map": "nav_msgs/OccupancyGrid"
            },
            "constants": {}
        },
        "GridCells": {
            "fields": {
                "header": "Header",
                "cell_width": "float32",
                "cell_height": "float32",
                "cells": "geometry_msgs/Point[]"
            },
            "constants": {}
        },
        "MapMetaData": {
            "fields": {
                "map_load_time": "time",
                "resolution": "float32",
                "width": "uint32",
                "height": "uint32",
                "origin": "geometry_msgs/Pose"
            },
            "constants": {}
        },
        "OccupancyGrid": {
            "fields": {
                "header": "Header",
                "info": "MapMetaData",
                "data": "int8[]"
            },
            "constants": {}
        },
        "Odometry": {
            "fields": {
                "header": "Header",
                "child_frame_id": "string",
                "pose": "geometry_msgs/PoseWithCovariance",
                "twist": "geometry_msgs/TwistWithCovariance"
            },
            "constants": {}
        },
        "Path": {
            "fields": {
                "header": "Header",
                "poses": "geometry_msgs/PoseStamped[]"
            },
            "constants": {}
        },
        "ModelCoefficients": {
            "fields": {
                "header": "Header",
                "values": "float32[]"
            },
            "constants": {}
        },
        "PointIndices": {
            "fields": {
                "header": "Header",
                "indices": "int32[]"
            },
            "constants": {}
        },
        "PolygonMesh": {
            "fields": {
                "header": "Header",
                "cloud": "sensor_msgs/PointCloud2",
                "polygons": "Vertices[]"
            },
            "constants": {}
        },
        "Vertices": {
            "fields": {
                "vertices": "uint32[]"
            },
            "constants": {}
        },
        "TypeDef": {
            "fields": {
                "type": "string",
                "fieldnames": "string[]",
                "fieldtypes": "string[]",
                "fieldarraylen": "int32[]",
                "examples": "string[]",
                "constnames": "string[]",
                "constvalues": "string[]"
            },
            "constants": {}
        },
        "ConnectedClient": {
            "fields": {
                "ip_address": "string",
                "connection_time": "time"
            },
            "constants": {}
        },
        "ConnectedClients": {
            "fields": {
                "clients": "ConnectedClient[]"
            },
            "constants": {}
        },
        "Logger": {
            "fields": {
                "name": "string",
                "level": "string"
            },
            "constants": {}
        },
        "Clock": {
            "fields": {
                "clock": "time"
            },
            "constants": {}
        },
        "Log": {
            "fields": {
                "level": "uint8",
                "msg": "string"
            },
            "constants": {
                "ROSDEBUG": 0,
                "INFO": 1,
                "WARN": 2,
                "ERROR": 3,
                "FATAL": 4
            }
        },
        "TopicStatistics": {
            "fields": {
                "topic": "string",
                "node_pub": "string",
                "node_sub": "string",
                "window_start": "time",
                "window_stop": "time",
                "delivered_msgs": "int32",
                "dropped_msgs": "int32",
                "traffic": "int32",
                "period_mean": "duration",
                "period_stddev": "duration",
                "period_max": "duration",
                "stamp_age_mean": "duration",
                "stamp_age_stddev": "duration",
                "stamp_age_max": "duration"
            },
            "constants": {}
        },
        "Floats": {
            "fields": {
                "data": "float32[]"
            },
            "constants": {}
        },
        "HeaderString": {
            "fields": {
                "header": "Header",
                "data": "string"
            },
            "constants": {}
        },
        "TopicInfo": {
            "fields": {
                "topic_id": "uint16",
                "topic_name": "string",
                "message_type": "string",
                "md5sum": "string",
                "buffer_size": "int32"
            },
            "constants": {
                "ID_PUBLISHER": 0,
                "ID_SUBSCRIBER": 1,
                "ID_SERVICE_SERVER": 2,
                "ID_SERVICE_CLIENT": 4,
                "ID_PARAMETER_REQUEST": 6,
                "ID_LOG": 7,
                "ID_TIME": 10,
                "ID_TX_STOP": 11
            }
        },
        "BatteryState": {
            "fields": {
                "header": "Header",
                "voltage": "float32",
                "current": "float32",
                "charge": "float32",
                "capacity": "float32",
                "design_capacity": "float32",
                "percentage": "float32",
                "power_supply_status": "uint8",
                "power_supply_health": "uint8",
                "power_supply_technology": "uint8",
                "present": "bool",
                "cell_voltage": "float32[]",
                "location": "string",
                "serial_number": "string"
            },
            "constants": {
                "POWER_SUPPLY_STATUS_UNKNOWN": 0,
                "POWER_SUPPLY_STATUS_CHARGING": 1,
                "POWER_SUPPLY_STATUS_DISCHARGING": 2,
                "POWER_SUPPLY_STATUS_NOT_CHARGING": 3,
                "POWER_SUPPLY_STATUS_FULL": 4,
                "POWER_SUPPLY_HEALTH_UNKNOWN": 0,
                "POWER_SUPPLY_HEALTH_GOOD": 1,
                "POWER_SUPPLY_HEALTH_OVERHEAT": 2,
                "POWER_SUPPLY_HEALTH_DEAD": 3,
                "POWER_SUPPLY_HEALTH_OVERVOLTAGE": 4,
                "POWER_SUPPLY_HEALTH_UNSPEC_FAILURE": 5,
                "POWER_SUPPLY_HEALTH_COLD": 6,
                "POWER_SUPPLY_HEALTH_WATCHDOG_TIMER_EXPIRE": 7,
                "POWER_SUPPLY_HEALTH_SAFETY_TIMER_EXPIRE": 8,
                "POWER_SUPPLY_TECHNOLOGY_UNKNOWN": 0,
                "POWER_SUPPLY_TECHNOLOGY_NIMH": 1,
                "POWER_SUPPLY_TECHNOLOGY_LION": 2,
                "POWER_SUPPLY_TECHNOLOGY_LIPO": 3,
                "POWER_SUPPLY_TECHNOLOGY_LIFE": 4,
                "POWER_SUPPLY_TECHNOLOGY_NICD": 5,
                "POWER_SUPPLY_TECHNOLOGY_LIMN": 6
            }
        },
        "CameraInfo": {
            "fields": {
                "header": "Header",
                "height": "uint32",
                "width": "uint32",
                "distortion_model": "string",
                "D": "float64[]",
                "K": "float64[9]",
                "R": "float64[9]",
                "P": "float64[12]",
                "binning_x": "uint32",
                "binning_y": "uint32",
                "roi": "RegionOfInterest"
            },
            "constants": {}
        },
        "ChannelFloat32": {
            "fields": {
                "name": "string",
                "values": "float32[]"
            },
            "constants": {}
        },
        "CompressedImage": {
            "fields": {
                "header": "Header",
                "format": "string",
                "data": "uint8[]"
            },
            "constants": {}
        },
        "FluidPressure": {
            "fields": {
                "header": "Header",
                "fluid_pressure": "float64",
                "variance": "float64"
            },
            "constants": {}
        },
        "Illuminance": {
            "fields": {
                "header": "Header",
                "illuminance": "float64",
                "variance": "float64"
            },
            "constants": {}
        },
        "Image": {
            "fields": {
                "header": "Header",
                "height": "uint32",
                "width": "uint32",
                "encoding": "string",
                "is_bigendian": "uint8",
                "step": "uint32",
                "data": "uint8[]"
            },
            "constants": {}
        },
        "Imu": {
            "fields": {
                "header": "Header",
                "orientation": "geometry_msgs/Quaternion",
                "orientation_covariance": "float64[9]",
                "angular_velocity": "geometry_msgs/Vector3",
                "angular_velocity_covariance": "float64[9]",
                "linear_acceleration": "geometry_msgs/Vector3",
                "linear_acceleration_covariance": "float64[9]"
            },
            "constants": {}
        },
        "JointState": {
            "fields": {
                "header": "Header",
                "name": "string[]",
                "position": "float64[]",
                "velocity": "float64[]",
                "effort": "float64[]"
            },
            "constants": {}
        },
        "Joy": {
            "fields": {
                "header": "Header",
                "axes": "float32[]",
                "buttons": "int32[]"
            },
            "constants": {}
        },
        "JoyFeedback": {
            "fields": {
                "type": "uint8",
                "id": "uint8",
                "intensity": "float32"
            },
            "constants": {
                "TYPE_LED": 0,
                "TYPE_RUMBLE": 1,
                "TYPE_BUZZER": 2
            }
        },
        "JoyFeedbackArray": {
            "fields": {
                "array": "JoyFeedback[]"
            },
            "constants": {}
        },
        "LaserEcho": {
            "fields": {
                "echoes": "float32[]"
            },
            "constants": {}
        },
        "LaserScan": {
            "fields": {
                "header": "Header",
                "": "Header",
                "angle_min": "float32",
                "angle_max": "float32",
                "angle_increment": "float32",
                "time_increment": "float32",
                "scan_time": "float32",
                "range_min": "float32",
                "range_max": "float32",
                "ranges": "float32[]",
                "intensities": "float32[]"
            },
            "constants": {}
        },
        "MagneticField": {
            "fields": {
                "header": "Header",
                "magnetic_field": "geometry_msgs/Vector3",
                "magnetic_field_covariance": "float64[9]"
            },
            "constants": {}
        },
        "MultiDOFJointState": {
            "fields": {
                "header": "Header",
                "joint_names": "string[]",
                "transforms": "geometry_msgs/Transform[]",
                "twist": "geometry_msgs/Twist[]",
                "wrench": "geometry_msgs/Wrench[]"
            },
            "constants": {}
        },
        "MultiEchoLaserScan": {
            "fields": {
                "header": "Header",
                "": "Header",
                "angle_min": "float32",
                "angle_max": "float32",
                "angle_increment": "float32",
                "time_increment": "float32",
                "scan_time": "float32",
                "range_min": "float32",
                "range_max": "float32",
                "ranges": "LaserEcho[]",
                "intensities": "LaserEcho[]"
            },
            "constants": {}
        },
        "NavSatFix": {
            "fields": {
                "header": "Header",
                "status": "NavSatStatus",
                "latitude": "float64",
                "longitude": "float64",
                "altitude": "float64",
                "position_covariance": "float64[9]",
                "position_covariance_type": "uint8"
            },
            "constants": {
                "COVARIANCE_TYPE_UNKNOWN": 0,
                "COVARIANCE_TYPE_APPROXIMATED": 1,
                "COVARIANCE_TYPE_DIAGONAL_KNOWN": 2,
                "COVARIANCE_TYPE_KNOWN": 3
            }
        },
        "NavSatStatus": {
            "fields": {
                "status": "int8",
                "service": "uint16"
            },
            "constants": {
                "STATUS_NO_FIX": -1,
                "STATUS_FIX": 0,
                "STATUS_SBAS_FIX": 1,
                "STATUS_GBAS_FIX": 2,
                "SERVICE_GPS": 1,
                "SERVICE_GLONASS": 2,
                "SERVICE_COMPASS": 4,
                "SERVICE_GALILEO": 8
            }
        },
        "PointCloud": {
            "fields": {
                "header": "Header",
                "points": "geometry_msgs/Point32[]",
                "channels": "ChannelFloat32[]"
            },
            "constants": {}
        },
        "PointCloud2": {
            "fields": {
                "header": "Header",
                "height": "uint32",
                "width": "uint32",
                "fields": "PointField[]",
                "is_bigendian": "bool",
                "point_step": "uint32",
                "row_step": "uint32",
                "data": "uint8[]",
                "is_dense": "bool"
            },
            "constants": {}
        },
        "PointField": {
            "fields": {
                "name": "string",
                "offset": "uint32",
                "datatype": "uint8",
                "count": "uint32"
            },
            "constants": {
                "INT8": 1,
                "UINT8": 2,
                "INT16": 3,
                "UINT16": 4,
                "INT32": 5,
                "UINT32": 6,
                "FLOAT32": 7,
                "FLOAT64": 8
            }
        },
        "Range": {
            "fields": {
                "header": "Header",
                "radiation_type": "uint8",
                "field_of_view": "float32",
                "min_range": "float32",
                "max_range": "float32",
                "range": "float32"
            },
            "constants": {
                "ULTRASOUND": 0,
                "INFRARED": 1
            }
        },
        "RegionOfInterest": {
            "fields": {
                "x_offset": "uint32",
                "y_offset": "uint32",
                "height": "uint32",
                "width": "uint32",
                "do_rectify": "bool"
            },
            "constants": {}
        },
        "RelativeHumidity": {
            "fields": {
                "header": "Header",
                "relative_humidity": "float64",
                "variance": "float64"
            },
            "constants": {}
        },
        "Temperature": {
            "fields": {
                "header": "Header",
                "temperature": "float64",
                "variance": "float64"
            },
            "constants": {}
        },
        "TimeReference": {
            "fields": {
                "header": "Header",
                "time_ref": "time",
                "source": "string"
            },
            "constants": {}
        },
        "Mesh": {
            "fields": {
                "triangles": "MeshTriangle[]",
                "vertices": "geometry_msgs/Point[]"
            },
            "constants": {}
        },
        "MeshTriangle": {
            "fields": {
                "vertex_indices": "uint32[3]"
            },
            "constants": {}
        },
        "Plane": {
            "fields": {
                "coef": "float64[4]"
            },
            "constants": {}
        },
        "SolidPrimitive": {
            "fields": {
                "type": "uint8",
                "dimensions": "float64[]"
            },
            "constants": {
                "BOX": 1,
                "SPHERE": 2,
                "CYLINDER": 3,
                "CONE": 4,
                "BOX_X": 0,
                "BOX_Y": 1,
                "BOX_Z": 2,
                "SPHERE_RADIUS": 0,
                "CYLINDER_HEIGHT": 0,
                "CYLINDER_RADIUS": 1,
                "CONE_HEIGHT": 0,
                "CONE_RADIUS": 1
            }
        },
        "SmachContainerInitialStatusCmd": {
            "fields": {
                "path": "string",
                "initial_states": "string[]",
                "local_data": "string"
            },
            "constants": {}
        },
        "SmachContainerStatus": {
            "fields": {
                "header": "Header",
                "path": "string",
                "initial_states": "string[]",
                "active_states": "string[]",
                "local_data": "string",
                "info": "string"
            },
            "constants": {}
        },
        "SmachContainerStructure": {
            "fields": {
                "header": "Header",
                "path": "string",
                "children": "string[]",
                "internal_outcomes": "string[]",
                "outcomes_from": "string[]",
                "outcomes_to": "string[]",
                "container_outcomes": "string[]"
            },
            "constants": {}
        },
        "Bool": {
            "fields": {
                "data": "bool"
            },
            "constants": {}
        },
        "Byte": {
            "fields": {
                "data": "byte"
            },
            "constants": {}
        },
        "ByteMultiArray": {
            "fields": {
                "layout": "MultiArrayLayout",
                "data": "byte[]"
            },
            "constants": {}
        },
        "Char": {
            "fields": {
                "data": "char"
            },
            "constants": {}
        },
        "ColorRGBA": {
            "fields": {
                "r": "float32",
                "g": "float32",
                "b": "float32",
                "a": "float32"
            },
            "constants": {}
        },
        "Duration": {
            "fields": {
                "data": "duration"
            },
            "constants": {}
        },
        "Empty": {
            "fields": {},
            "constants": {}
        },
        "Float32": {
            "fields": {
                "data": "float32"
            },
            "constants": {}
        },
        "Float32MultiArray": {
            "fields": {
                "layout": "MultiArrayLayout",
                "data": "float32[]"
            },
            "constants": {}
        },
        "Float64": {
            "fields": {
                "data": "float64"
            },
            "constants": {}
        },
        "Float64MultiArray": {
            "fields": {
                "layout": "MultiArrayLayout",
                "data": "float64[]"
            },
            "constants": {}
        },
        "Header": {
            "fields": {
                "seq": "uint32",
                "stamp": "time",
                "frame_id": "string"
            },
            "constants": {}
        },
        "Int16": {
            "fields": {
                "data": "int16"
            },
            "constants": {}
        },
        "Int16MultiArray": {
            "fields": {
                "layout": "MultiArrayLayout",
                "data": "int16[]"
            },
            "constants": {}
        },
        "Int32": {
            "fields": {
                "data": "int32"
            },
            "constants": {}
        },
        "Int32MultiArray": {
            "fields": {
                "layout": "MultiArrayLayout",
                "data": "int32[]"
            },
            "constants": {}
        },
        "Int64": {
            "fields": {
                "data": "int64"
            },
            "constants": {}
        },
        "Int64MultiArray": {
            "fields": {
                "layout": "MultiArrayLayout",
                "data": "int64[]"
            },
            "constants": {}
        },
        "Int8": {
            "fields": {
                "data": "int8"
            },
            "constants": {}
        },
        "Int8MultiArray": {
            "fields": {
                "layout": "MultiArrayLayout",
                "data": "int8[]"
            },
            "constants": {}
        },
        "MultiArrayDimension": {
            "fields": {
                "label": "string",
                "size": "uint32",
                "stride": "uint32"
            },
            "constants": {}
        },
        "MultiArrayLayout": {
            "fields": {
                "dim": "MultiArrayDimension[]",
                "data_offset": "uint32"
            },
            "constants": {}
        },
        "String": {
            "fields": {
                "data": "string"
            },
            "constants": {}
        },
        "Time": {
            "fields": {
                "data": "time"
            },
            "constants": {}
        },
        "UInt16": {
            "fields": {
                "data": "uint16"
            },
            "constants": {}
        },
        "UInt16MultiArray": {
            "fields": {
                "layout": "MultiArrayLayout",
                "data": "uint16[]"
            },
            "constants": {}
        },
        "UInt32": {
            "fields": {
                "data": "uint32"
            },
            "constants": {}
        },
        "UInt32MultiArray": {
            "fields": {
                "layout": "MultiArrayLayout",
                "data": "uint32[]"
            },
            "constants": {}
        },
        "UInt64": {
            "fields": {
                "data": "uint64"
            },
            "constants": {}
        },
        "UInt64MultiArray": {
            "fields": {
                "layout": "MultiArrayLayout",
                "data": "uint64[]"
            },
            "constants": {}
        },
        "UInt8": {
            "fields": {
                "data": "uint8"
            },
            "constants": {}
        },
        "UInt8MultiArray": {
            "fields": {
                "layout": "MultiArrayLayout",
                "data": "uint8[]"
            },
            "constants": {}
        },
        "DisparityImage": {
            "fields": {
                "header": "Header",
                "image": "sensor_msgs/Image",
                "f": "float32",
                "T": "float32",
                "valid_window": "sensor_msgs/RegionOfInterest",
                "min_disparity": "float32",
                "max_disparity": "float32",
                "delta_d": "float32"
            },
            "constants": {}
        },
        "tfMessage": {
            "fields": {
                "transforms": "geometry_msgs/TransformStamped[]"
            },
            "constants": {}
        },
        "LookupTransformAction": {
            "fields": {
                "action_goal": "LookupTransformActionGoal",
                "action_result": "LookupTransformActionResult",
                "action_feedback": "LookupTransformActionFeedback"
            },
            "constants": {}
        },
        "LookupTransformActionFeedback": {
            "fields": {
                "header": "Header",
                "status": "actionlib_msgs/GoalStatus",
                "feedback": "LookupTransformFeedback"
            },
            "constants": {}
        },
        "LookupTransformActionGoal": {
            "fields": {
                "header": "Header",
                "goal_id": "actionlib_msgs/GoalID",
                "goal": "LookupTransformGoal"
            },
            "constants": {}
        },
        "LookupTransformActionResult": {
            "fields": {
                "header": "Header",
                "status": "actionlib_msgs/GoalStatus",
                "result": "LookupTransformResult"
            },
            "constants": {}
        },
        "LookupTransformFeedback": {
            "fields": {},
            "constants": {}
        },
        "LookupTransformGoal": {
            "fields": {
                "target_frame": "string",
                "source_frame": "string",
                "source_time": "time",
                "timeout": "duration",
                "target_time": "time",
                "fixed_frame": "string",
                "advanced": "bool"
            },
            "constants": {}
        },
        "LookupTransformResult": {
            "fields": {
                "transform": "geometry_msgs/TransformStamped",
                "error": "tf2_msgs/TF2Error"
            },
            "constants": {}
        },
        "TF2Error": {
            "fields": {
                "error": "uint8",
                "error_string": "string"
            },
            "constants": {
                "NO_ERROR": 0,
                "LOOKUP_ERROR": 1,
                "CONNECTIVITY_ERROR": 2,
                "EXTRAPOLATION_ERROR": 3,
                "INVALID_ARGUMENT_ERROR": 4,
                "TIMEOUT_ERROR": 5,
                "TRANSFORM_ERROR": 6
            }
        },
        "TFMessage": {
            "fields": {
                "transforms": "geometry_msgs/TransformStamped[]"
            },
            "constants": {}
        },
        "Packet": {
            "fields": {
                "header": "Header",
                "data": "uint8[]",
                "b_o_s": "int32",
                "e_o_s": "int32",
                "granulepos": "int64",
                "packetno": "int64"
            },
            "constants": {}
        },
        "JointTrajectory": {
            "fields": {
                "header": "Header",
                "joint_names": "string[]",
                "points": "JointTrajectoryPoint[]"
            },
            "constants": {}
        },
        "JointTrajectoryPoint": {
            "fields": {
                "positions": "float64[]",
                "velocities": "float64[]",
                "accelerations": "float64[]",
                "effort": "float64[]",
                "time_from_start": "duration"
            },
            "constants": {}
        },
        "MultiDOFJointTrajectory": {
            "fields": {
                "header": "Header",
                "joint_names": "string[]",
                "points": "MultiDOFJointTrajectoryPoint[]"
            },
            "constants": {}
        },
        "MultiDOFJointTrajectoryPoint": {
            "fields": {
                "transforms": "geometry_msgs/Transform[]",
                "velocities": "geometry_msgs/Twist[]",
                "accelerations": "geometry_msgs/Twist[]",
                "time_from_start": "duration"
            },
            "constants": {}
        },
        "ShapeAction": {
            "fields": {
                "action_goal": "ShapeActionGoal",
                "action_result": "ShapeActionResult",
                "action_feedback": "ShapeActionFeedback"
            },
            "constants": {}
        },
        "ShapeActionFeedback": {
            "fields": {
                "header": "Header",
                "status": "actionlib_msgs/GoalStatus",
                "feedback": "ShapeFeedback"
            },
            "constants": {}
        },
        "ShapeActionGoal": {
            "fields": {
                "header": "Header",
                "goal_id": "actionlib_msgs/GoalID",
                "goal": "ShapeGoal"
            },
            "constants": {}
        },
        "ShapeActionResult": {
            "fields": {
                "header": "Header",
                "status": "actionlib_msgs/GoalStatus",
                "result": "ShapeResult"
            },
            "constants": {}
        },
        "ShapeFeedback": {
            "fields": {},
            "constants": {}
        },
        "ShapeGoal": {
            "fields": {
                "edges": "int32",
                "radius": "float32"
            },
            "constants": {}
        },
        "ShapeResult": {
            "fields": {
                "interior_angle": "float32",
                "apothem": "float32"
            },
            "constants": {}
        },
        "Velocity": {
            "fields": {
                "linear": "float32",
                "angular": "float32"
            },
            "constants": {}
        },
        "Color": {
            "fields": {
                "r": "uint8",
                "g": "uint8",
                "b": "uint8"
            },
            "constants": {}
        },
        "ImageMarker": {
            "fields": {
                "header": "Header",
                "ns": "string",
                "id": "int32",
                "type": "int32",
                "action": "int32",
                "position": "geometry_msgs/Point",
                "scale": "float32",
                "outline_color": "std_msgs/ColorRGBA",
                "filled": "uint8",
                "fill_color": "std_msgs/ColorRGBA",
                "lifetime": "duration",
                "points": "geometry_msgs/Point[]",
                "outline_colors": "std_msgs/ColorRGBA[]"
            },
            "constants": {
                "CIRCLE": 0,
                "LINE_STRIP": 1,
                "LINE_LIST": 2,
                "POLYGON": 3,
                "POINTS": 4,
                "ADD": 0,
                "REMOVE": 1
            }
        },
        "InteractiveMarker": {
            "fields": {
                "header": "Header",
                "pose": "geometry_msgs/Pose",
                "name": "string",
                "description": "string",
                "scale": "float32",
                "menu_entries": "MenuEntry[]",
                "controls": "InteractiveMarkerControl[]"
            },
            "constants": {}
        },
        "InteractiveMarkerControl": {
            "fields": {
                "name": "string",
                "orientation": "geometry_msgs/Quaternion",
                "orientation_mode": "uint8",
                "interaction_mode": "uint8",
                "always_visible": "bool",
                "markers": "Marker[]",
                "independent_marker_orientation": "bool",
                "description": "string"
            },
            "constants": {
                "INHERIT": 0,
                "FIXED": 1,
                "VIEW_FACING": 2,
                "NONE": 0,
                "MENU": 1,
                "BUTTON": 2,
                "MOVE_AXIS": 3,
                "MOVE_PLANE": 4,
                "ROTATE_AXIS": 5,
                "MOVE_ROTATE": 6,
                "MOVE_3D": 7,
                "ROTATE_3D": 8,
                "MOVE_ROTATE_3D": 9
            }
        },
        "InteractiveMarkerFeedback": {
            "fields": {
                "header": "Header",
                "client_id": "string",
                "marker_name": "string",
                "control_name": "string",
                "event_type": "uint8",
                "pose": "geometry_msgs/Pose",
                "menu_entry_id": "uint32",
                "mouse_point": "geometry_msgs/Point",
                "mouse_point_valid": "bool"
            },
            "constants": {
                "KEEP_ALIVE": 0,
                "POSE_UPDATE": 1,
                "MENU_SELECT": 2,
                "BUTTON_CLICK": 3,
                "MOUSE_DOWN": 4,
                "MOUSE_UP": 5
            }
        },
        "InteractiveMarkerInit": {
            "fields": {
                "server_id": "string",
                "seq_num": "uint64",
                "markers": "InteractiveMarker[]"
            },
            "constants": {}
        },
        "InteractiveMarkerPose": {
            "fields": {
                "header": "Header",
                "pose": "geometry_msgs/Pose",
                "name": "string"
            },
            "constants": {}
        },
        "InteractiveMarkerUpdate": {
            "fields": {
                "server_id": "string",
                "seq_num": "uint64",
                "type": "uint8",
                "markers": "InteractiveMarker[]",
                "poses": "InteractiveMarkerPose[]",
                "erases": "string[]"
            },
            "constants": {
                "KEEP_ALIVE": 0,
                "UPDATE": 1
            }
        },
        "Marker": {
            "fields": {
                "header": "Header",
                "ns": "string",
                "id": "int32",
                "type": "int32",
                "action": "int32",
                "pose": "geometry_msgs/Pose",
                "scale": "geometry_msgs/Vector3",
                "color": "std_msgs/ColorRGBA",
                "lifetime": "duration",
                "frame_locked": "bool",
                "points": "geometry_msgs/Point[]",
                "colors": "std_msgs/ColorRGBA[]",
                "text": "string",
                "mesh_resource": "string",
                "mesh_use_embedded_materials": "bool"
            },
            "constants": {
                "ARROW": 0,
                "CUBE": 1,
                "SPHERE": 2,
                "CYLINDER": 3,
                "LINE_STRIP": 4,
                "LINE_LIST": 5,
                "CUBE_LIST": 6,
                "SPHERE_LIST": 7,
                "POINTS": 8,
                "TEXT_VIEW_FACING": 9,
                "MESH_RESOURCE": 10,
                "TRIANGLE_LIST": 11,
                "ADD": 0,
                "MODIFY": 0,
                "DELETE": 2,
                "DELETEALL": 3
            }
        },
        "MarkerArray": {
            "fields": {
                "markers": "Marker[]"
            },
            "constants": {}
        },
        "MenuEntry": {
            "fields": {
                "id": "uint32",
                "parent_id": "uint32",
                "title": "string",
                "command": "string",
                "command_type": "uint8"
            },
            "constants": {
                "FEEDBACK": 0,
                "ROSRUN": 1,
                "ROSLAUNCH": 2
            }
        }
    },
    "primitives": {
        "known_numeric": [
            "int8",
            "uint8",
            "int16",
            "int32",
            "int64",
            "uint16",
            "uint32",
            "uint64",
            "float32",
            "float64"
        ]
    },
    "packages": {
        "actionlib": {
            "TestAction": {
                "fields": {
                    "action_goal": "TestActionGoal",
                    "action_result": "TestActionResult",
                    "action_feedback": "TestActionFeedback"
                },
                "constants": {}
            },
            "TestActionFeedback": {
                "fields": {
                    "header": "Header",
                    "status": "actionlib_msgs/GoalStatus",
                    "feedback": "TestFeedback"
                },
                "constants": {}
            },
            "TestActionGoal": {
                "fields": {
                    "header": "Header",
                    "goal_id": "actionlib_msgs/GoalID",
                    "goal": "TestGoal"
                },
                "constants": {}
            },
            "TestActionResult": {
                "fields": {
                    "header": "Header",
                    "status": "actionlib_msgs/GoalStatus",
                    "result": "TestResult"
                },
                "constants": {}
            },
            "TestFeedback": {
                "fields": {
                    "feedback": "int32"
                },
                "constants": {}
            },
            "TestGoal": {
                "fields": {
                    "goal": "int32"
                },
                "constants": {}
            },
            "TestRequestAction": {
                "fields": {
                    "action_goal": "TestRequestActionGoal",
                    "action_result": "TestRequestActionResult",
                    "action_feedback": "TestRequestActionFeedback"
                },
                "constants": {}
            },
            "TestRequestActionFeedback": {
                "fields": {
                    "header": "Header",
                    "status": "actionlib_msgs/GoalStatus",
                    "feedback": "TestRequestFeedback"
                },
                "constants": {}
            },
            "TestRequestActionGoal": {
                "fields": {
                    "header": "Header",
                    "goal_id": "actionlib_msgs/GoalID",
                    "goal": "TestRequestGoal"
                },
                "constants": {}
            },
            "TestRequestActionResult": {
                "fields": {
                    "header": "Header",
                    "status": "actionlib_msgs/GoalStatus",
                    "result": "TestRequestResult"
                },
                "constants": {}
            },
            "TestRequestFeedback": {
                "fields": {},
                "constants": {}
            },
            "TestRequestGoal": {
                "fields": {
                    "terminate_status": "int32",
                    "ignore_cancel": "bool",
                    "result_text": "string",
                    "the_result": "int32",
                    "is_simple_client": "bool",
                    "delay_accept": "duration",
                    "delay_terminate": "duration",
                    "pause_status": "duration"
                },
                "constants": {
                    "TERMINATE_SUCCESS": 0,
                    "TERMINATE_ABORTED": 1,
                    "TERMINATE_REJECTED": 2,
                    "TERMINATE_LOSE": 3,
                    "TERMINATE_DROP": 4,
                    "TERMINATE_EXCEPTION": 5
                }
            },
            "TestRequestResult": {
                "fields": {
                    "the_result": "int32",
                    "is_simple_server": "bool"
                },
                "constants": {}
            },
            "TestResult": {
                "fields": {
                    "result": "int32"
                },
                "constants": {}
            },
            "TwoIntsAction": {
                "fields": {
                    "action_goal": "TwoIntsActionGoal",
                    "action_result": "TwoIntsActionResult",
                    "action_feedback": "TwoIntsActionFeedback"
                },
                "constants": {}
            },
            "TwoIntsActionFeedback": {
                "fields": {
                    "header": "Header",
                    "status": "actionlib_msgs/GoalStatus",
                    "feedback": "TwoIntsFeedback"
                },
                "constants": {}
            },
            "TwoIntsActionGoal": {
                "fields": {
                    "header": "Header",
                    "goal_id": "actionlib_msgs/GoalID",
                    "goal": "TwoIntsGoal"
                },
                "constants": {}
            },
            "TwoIntsActionResult": {
                "fields": {
                    "header": "Header",
                    "status": "actionlib_msgs/GoalStatus",
                    "result": "TwoIntsResult"
                },
                "constants": {}
            },
            "TwoIntsFeedback": {
                "fields": {},
                "constants": {}
            },
            "TwoIntsGoal": {
                "fields": {
                    "a": "int64",
                    "b": "int64"
                },
                "constants": {}
            },
            "TwoIntsResult": {
                "fields": {
                    "sum": "int64"
                },
                "constants": {}
            },
            "dependsOn": [
                "message_generation",
                "message_runtime",
                "python-wxtools",
                "roslib",
                "rostopic"
            ]
        },
        "actionlib_msgs": {
            "GoalID": {
                "fields": {
                    "stamp": "time",
                    "id": "string"
                },
                "constants": {}
            },
            "GoalStatus": {
                "fields": {
                    "goal_id": "GoalID",
                    "status": "uint8",
                    "text": "string"
                },
                "constants": {
                    "PENDING": 0,
                    "ACTIVE": 1,
                    "PREEMPTED": 2,
                    "SUCCEEDED": 3,
                    "ABORTED": 4,
                    "REJECTED": 5,
                    "PREEMPTING": 6,
                    "RECALLING": 7,
                    "RECALLED": 8,
                    "LOST": 9
                }
            },
            "GoalStatusArray": {
                "fields": {
                    "header": "Header",
                    "status_list": "GoalStatus[]"
                },
                "constants": {}
            },
            "dependsOn": [
                "message_generation",
                "std_msgs"
            ]
        },
        "actionlib_tutorials": {
            "AveragingAction": {
                "fields": {
                    "action_goal": "AveragingActionGoal",
                    "action_result": "AveragingActionResult",
                    "action_feedback": "AveragingActionFeedback"
                },
                "constants": {}
            },
            "AveragingActionFeedback": {
                "fields": {
                    "header": "Header",
                    "status": "actionlib_msgs/GoalStatus",
                    "feedback": "AveragingFeedback"
                },
                "constants": {}
            },
            "AveragingActionGoal": {
                "fields": {
                    "header": "Header",
                    "goal_id": "actionlib_msgs/GoalID",
                    "goal": "AveragingGoal"
                },
                "constants": {}
            },
            "AveragingActionResult": {
                "fields": {
                    "header": "Header",
                    "status": "actionlib_msgs/GoalStatus",
                    "result": "AveragingResult"
                },
                "constants": {}
            },
            "AveragingFeedback": {
                "fields": {
                    "sample": "int32",
                    "data": "float32",
                    "mean": "float32",
                    "std_dev": "float32"
                },
                "constants": {}
            },
            "AveragingGoal": {
                "fields": {
                    "samples": "int32"
                },
                "constants": {}
            },
            "AveragingResult": {
                "fields": {
                    "mean": "float32",
                    "std_dev": "float32"
                },
                "constants": {}
            },
            "FibonacciAction": {
                "fields": {
                    "action_goal": "FibonacciActionGoal",
                    "action_result": "FibonacciActionResult",
                    "action_feedback": "FibonacciActionFeedback"
                },
                "constants": {}
            },
            "FibonacciActionFeedback": {
                "fields": {
                    "header": "Header",
                    "status": "actionlib_msgs/GoalStatus",
                    "feedback": "FibonacciFeedback"
                },
                "constants": {}
            },
            "FibonacciActionGoal": {
                "fields": {
                    "header": "Header",
                    "goal_id": "actionlib_msgs/GoalID",
                    "goal": "FibonacciGoal"
                },
                "constants": {}
            },
            "FibonacciActionResult": {
                "fields": {
                    "header": "Header",
                    "status": "actionlib_msgs/GoalStatus",
                    "result": "FibonacciResult"
                },
                "constants": {}
            },
            "FibonacciFeedback": {
                "fields": {
                    "sequence": "int32[]"
                },
                "constants": {}
            },
            "FibonacciGoal": {
                "fields": {
                    "order": "int32"
                },
                "constants": {}
            },
            "FibonacciResult": {
                "fields": {
                    "sequence": "int32[]"
                },
                "constants": {}
            },
            "dependsOn": [
                "roscpp",
                "actionlib",
                "message_generation",
                "std_msgs",
                "actionlib_msgs"
            ]
        },
        "base_local_planner": {
            "Position2DInt": {
                "fields": {
                    "x": "int64",
                    "y": "int64"
                },
                "constants": {}
            },
            "dependsOn": [
                "cmake_modules",
                "message_generation",
                "tf2_geometry_msgs",
                "message_runtime"
            ]
        },
        "bond": {
            "Constants": {
                "fields": {},
                "constants": {
                    "DEAD_PUBLISH_PERIOD": 0.05,
                    "DEFAULT_CONNECT_TIMEOUT": 10,
                    "DEFAULT_HEARTBEAT_TIMEOUT": 4,
                    "DEFAULT_DISCONNECT_TIMEOUT": 2,
                    "DEFAULT_HEARTBEAT_PERIOD": 1,
                    "DISABLE_HEARTBEAT_TIMEOUT_PARAM": "/bond_disable_heartbeat_timeout"
                }
            },
            "Status": {
                "fields": {
                    "header": "Header",
                    "id": "string",
                    "instance_id": "string",
                    "active": "bool",
                    "heartbeat_timeout": "float32",
                    "heartbeat_period": "float32"
                },
                "constants": {}
            },
            "dependsOn": [
                "message_generation",
                "std_msgs",
                "message_runtime",
                "std_msgs"
            ]
        },
        "control_msgs": {
            "FollowJointTrajectoryAction": {
                "fields": {
                    "action_goal": "FollowJointTrajectoryActionGoal",
                    "action_result": "FollowJointTrajectoryActionResult",
                    "action_feedback": "FollowJointTrajectoryActionFeedback"
                },
                "constants": {}
            },
            "FollowJointTrajectoryActionFeedback": {
                "fields": {
                    "header": "Header",
                    "status": "actionlib_msgs/GoalStatus",
                    "feedback": "FollowJointTrajectoryFeedback"
                },
                "constants": {}
            },
            "FollowJointTrajectoryActionGoal": {
                "fields": {
                    "header": "Header",
                    "goal_id": "actionlib_msgs/GoalID",
                    "goal": "FollowJointTrajectoryGoal"
                },
                "constants": {}
            },
            "FollowJointTrajectoryActionResult": {
                "fields": {
                    "header": "Header",
                    "status": "actionlib_msgs/GoalStatus",
                    "result": "FollowJointTrajectoryResult"
                },
                "constants": {}
            },
            "FollowJointTrajectoryFeedback": {
                "fields": {
                    "header": "Header",
                    "joint_names": "string[]",
                    "desired": "trajectory_msgs/JointTrajectoryPoint",
                    "actual": "trajectory_msgs/JointTrajectoryPoint",
                    "error": "trajectory_msgs/JointTrajectoryPoint"
                },
                "constants": {}
            },
            "FollowJointTrajectoryGoal": {
                "fields": {
                    "trajectory": "trajectory_msgs/JointTrajectory",
                    "path_tolerance": "JointTolerance[]",
                    "goal_tolerance": "JointTolerance[]",
                    "goal_time_tolerance": "duration"
                },
                "constants": {}
            },
            "FollowJointTrajectoryResult": {
                "fields": {
                    "error_code": "int32",
                    "error_string": "string"
                },
                "constants": {
                    "SUCCESSFUL": 0,
                    "INVALID_GOAL": -1,
                    "INVALID_JOINTS": -2,
                    "OLD_HEADER_TIMESTAMP": -3,
                    "PATH_TOLERANCE_VIOLATED": -4,
                    "GOAL_TOLERANCE_VIOLATED": -5
                }
            },
            "GripperCommand": {
                "fields": {
                    "position": "float64",
                    "max_effort": "float64"
                },
                "constants": {}
            },
            "GripperCommandAction": {
                "fields": {
                    "action_goal": "GripperCommandActionGoal",
                    "action_result": "GripperCommandActionResult",
                    "action_feedback": "GripperCommandActionFeedback"
                },
                "constants": {}
            },
            "GripperCommandActionFeedback": {
                "fields": {
                    "header": "Header",
                    "status": "actionlib_msgs/GoalStatus",
                    "feedback": "GripperCommandFeedback"
                },
                "constants": {}
            },
            "GripperCommandActionGoal": {
                "fields": {
                    "header": "Header",
                    "goal_id": "actionlib_msgs/GoalID",
                    "goal": "GripperCommandGoal"
                },
                "constants": {}
            },
            "GripperCommandActionResult": {
                "fields": {
                    "header": "Header",
                    "status": "actionlib_msgs/GoalStatus",
                    "result": "GripperCommandResult"
                },
                "constants": {}
            },
            "GripperCommandFeedback": {
                "fields": {
                    "position": "float64",
                    "effort": "float64",
                    "stalled": "bool",
                    "reached_goal": "bool"
                },
                "constants": {}
            },
            "GripperCommandGoal": {
                "fields": {
                    "command": "GripperCommand"
                },
                "constants": {}
            },
            "GripperCommandResult": {
                "fields": {
                    "position": "float64",
                    "effort": "float64",
                    "stalled": "bool",
                    "reached_goal": "bool"
                },
                "constants": {}
            },
            "JointControllerState": {
                "fields": {
                    "header": "Header",
                    "set_point": "float64",
                    "process_value": "float64",
                    "process_value_dot": "float64",
                    "error": "float64",
                    "time_step": "float64",
                    "command": "float64",
                    "p": "float64",
                    "i": "float64",
                    "d": "float64",
                    "i_clamp": "float64",
                    "antiwindup": "bool"
                },
                "constants": {}
            },
            "JointJog": {
                "fields": {
                    "header": "Header",
                    "joint_names": "string[]",
                    "displacements": "float64[]",
                    "velocities": "float64[]",
                    "duration": "float64"
                },
                "constants": {}
            },
            "JointTolerance": {
                "fields": {
                    "name": "string",
                    "position": "float64",
                    "velocity": "float64",
                    "acceleration": "float64"
                },
                "constants": {}
            },
            "JointTrajectoryAction": {
                "fields": {
                    "action_goal": "JointTrajectoryActionGoal",
                    "action_result": "JointTrajectoryActionResult",
                    "action_feedback": "JointTrajectoryActionFeedback"
                },
                "constants": {}
            },
            "JointTrajectoryActionFeedback": {
                "fields": {
                    "header": "Header",
                    "status": "actionlib_msgs/GoalStatus",
                    "feedback": "JointTrajectoryFeedback"
                },
                "constants": {}
            },
            "JointTrajectoryActionGoal": {
                "fields": {
                    "header": "Header",
                    "goal_id": "actionlib_msgs/GoalID",
                    "goal": "JointTrajectoryGoal"
                },
                "constants": {}
            },
            "JointTrajectoryActionResult": {
                "fields": {
                    "header": "Header",
                    "status": "actionlib_msgs/GoalStatus",
                    "result": "JointTrajectoryResult"
                },
                "constants": {}
            },
            "JointTrajectoryControllerState": {
                "fields": {
                    "header": "Header",
                    "joint_names": "string[]",
                    "desired": "trajectory_msgs/JointTrajectoryPoint",
                    "actual": "trajectory_msgs/JointTrajectoryPoint",
                    "error": "trajectory_msgs/JointTrajectoryPoint"
                },
                "constants": {}
            },
            "JointTrajectoryFeedback": {
                "fields": {},
                "constants": {}
            },
            "JointTrajectoryGoal": {
                "fields": {
                    "trajectory": "trajectory_msgs/JointTrajectory"
                },
                "constants": {}
            },
            "JointTrajectoryResult": {
                "fields": {},
                "constants": {}
            },
            "PidState": {
                "fields": {
                    "header": "Header",
                    "timestep": "duration",
                    "error": "float64",
                    "error_dot": "float64",
                    "p_error": "float64",
                    "i_error": "float64",
                    "d_error": "float64",
                    "p_term": "float64",
                    "i_term": "float64",
                    "d_term": "float64",
                    "i_max": "float64",
                    "i_min": "float64",
                    "output": "float64"
                },
                "constants": {}
            },
            "PointHeadAction": {
                "fields": {
                    "action_goal": "PointHeadActionGoal",
                    "action_result": "PointHeadActionResult",
                    "action_feedback": "PointHeadActionFeedback"
                },
                "constants": {}
            },
            "PointHeadActionFeedback": {
                "fields": {
                    "header": "Header",
                    "status": "actionlib_msgs/GoalStatus",
                    "feedback": "PointHeadFeedback"
                },
                "constants": {}
            },
            "PointHeadActionGoal": {
                "fields": {
                    "header": "Header",
                    "goal_id": "actionlib_msgs/GoalID",
                    "goal": "PointHeadGoal"
                },
                "constants": {}
            },
            "PointHeadActionResult": {
                "fields": {
                    "header": "Header",
                    "status": "actionlib_msgs/GoalStatus",
                    "result": "PointHeadResult"
                },
                "constants": {}
            },
            "PointHeadFeedback": {
                "fields": {
                    "pointing_angle_error": "float64"
                },
                "constants": {}
            },
            "PointHeadGoal": {
                "fields": {
                    "target": "geometry_msgs/PointStamped",
                    "pointing_axis": "geometry_msgs/Vector3",
                    "pointing_frame": "string",
                    "min_duration": "duration",
                    "max_velocity": "float64"
                },
                "constants": {}
            },
            "PointHeadResult": {
                "fields": {},
                "constants": {}
            },
            "SingleJointPositionAction": {
                "fields": {
                    "action_goal": "SingleJointPositionActionGoal",
                    "action_result": "SingleJointPositionActionResult",
                    "action_feedback": "SingleJointPositionActionFeedback"
                },
                "constants": {}
            },
            "SingleJointPositionActionFeedback": {
                "fields": {
                    "header": "Header",
                    "status": "actionlib_msgs/GoalStatus",
                    "feedback": "SingleJointPositionFeedback"
                },
                "constants": {}
            },
            "SingleJointPositionActionGoal": {
                "fields": {
                    "header": "Header",
                    "goal_id": "actionlib_msgs/GoalID",
                    "goal": "SingleJointPositionGoal"
                },
                "constants": {}
            },
            "SingleJointPositionActionResult": {
                "fields": {
                    "header": "Header",
                    "status": "actionlib_msgs/GoalStatus",
                    "result": "SingleJointPositionResult"
                },
                "constants": {}
            },
            "SingleJointPositionFeedback": {
                "fields": {
                    "header": "Header",
                    "position": "float64",
                    "velocity": "float64",
                    "error": "float64"
                },
                "constants": {}
            },
            "SingleJointPositionGoal": {
                "fields": {
                    "position": "float64",
                    "min_duration": "duration",
                    "max_velocity": "float64"
                },
                "constants": {}
            },
            "SingleJointPositionResult": {
                "fields": {},
                "constants": {}
            },
            "dependsOn": [
                "message_generation",
                "std_msgs",
                "trajectory_msgs",
                "geometry_msgs",
                "actionlib_msgs"
            ]
        },
        "controller_manager_msgs": {
            "ControllerState": {
                "fields": {
                    "name": "string",
                    "state": "string",
                    "type": "string",
                    "claimed_resources": "controller_manager_msgs/HardwareInterfaceResources[]"
                },
                "constants": {}
            },
            "ControllerStatistics": {
                "fields": {
                    "name": "string",
                    "type": "string",
                    "timestamp": "time",
                    "running": "bool",
                    "max_time": "duration",
                    "mean_time": "duration",
                    "variance_time": "duration",
                    "num_control_loop_overruns": "int32",
                    "time_last_control_loop_overrun": "time"
                },
                "constants": {}
            },
            "ControllersStatistics": {
                "fields": {
                    "header": "std_msgs/Header",
                    "controller": "controller_manager_msgs/ControllerStatistics[]"
                },
                "constants": {}
            },
            "HardwareInterfaceResources": {
                "fields": {
                    "hardware_interface": "string",
                    "resources": "string[]"
                },
                "constants": {}
            },
            "dependsOn": [
                "message_generation",
                "message_runtime"
            ]
        },
        "costmap_2d": {
            "VoxelGrid": {
                "fields": {
                    "header": "Header",
                    "data": "uint32[]",
                    "origin": "geometry_msgs/Point32",
                    "resolutions": "geometry_msgs/Vector3",
                    "size_x": "uint32",
                    "size_y": "uint32",
                    "size_z": "uint32"
                },
                "constants": {}
            },
            "dependsOn": [
                "cmake_modules",
                "message_generation",
                "tf2_geometry_msgs",
                "tf2_sensor_msgs",
                "message_runtime",
                "rosconsole"
            ]
        },
        "diagnostic_msgs": {
            "DiagnosticArray": {
                "fields": {
                    "header": "Header",
                    "status": "DiagnosticStatus[]"
                },
                "constants": {}
            },
            "DiagnosticStatus": {
                "fields": {
                    "level": "byte",
                    "name": "string",
                    "message": "string",
                    "hardware_id": "string",
                    "values": "KeyValue[]"
                },
                "constants": {
                    "OK": 0,
                    "WARN": 1,
                    "ERROR": 2,
                    "STALE": 3
                }
            },
            "KeyValue": {
                "fields": {
                    "key": "string",
                    "value": "string"
                },
                "constants": {}
            },
            "dependsOn": [
                "message_generation",
                "std_msgs"
            ]
        },
        "dynamic_reconfigure": {
            "BoolParameter": {
                "fields": {
                    "name": "string",
                    "value": "bool"
                },
                "constants": {}
            },
            "Config": {
                "fields": {
                    "bools": "BoolParameter[]",
                    "ints": "IntParameter[]",
                    "strs": "StrParameter[]",
                    "doubles": "DoubleParameter[]",
                    "groups": "GroupState[]"
                },
                "constants": {}
            },
            "ConfigDescription": {
                "fields": {
                    "groups": "Group[]",
                    "max": "Config",
                    "min": "Config",
                    "dflt": "Config"
                },
                "constants": {}
            },
            "DoubleParameter": {
                "fields": {
                    "name": "string",
                    "value": "float64"
                },
                "constants": {}
            },
            "Group": {
                "fields": {
                    "name": "string",
                    "type": "string",
                    "parameters": "ParamDescription[]",
                    "parent": "int32",
                    "id": "int32"
                },
                "constants": {}
            },
            "GroupState": {
                "fields": {
                    "name": "string",
                    "state": "bool",
                    "id": "int32",
                    "parent": "int32"
                },
                "constants": {}
            },
            "IntParameter": {
                "fields": {
                    "name": "string",
                    "value": "int32"
                },
                "constants": {}
            },
            "ParamDescription": {
                "fields": {
                    "name": "string",
                    "type": "string",
                    "level": "uint32",
                    "description": "string",
                    "edit_method": "string"
                },
                "constants": {}
            },
            "SensorLevels": {
                "fields": {},
                "constants": {
                    "RECONFIGURE_CLOSE": 3,
                    "RECONFIGURE_STOP": 1,
                    "RECONFIGURE_RUNNING": 0
                }
            },
            "StrParameter": {
                "fields": {
                    "name": "string",
                    "value": "string"
                },
                "constants": {}
            },
            "dependsOn": [
                "cpp_common",
                "message_generation",
                "roscpp_serialization",
                "rostest",
                "message_runtime",
                "roslib",
                "rospy",
                "rosservice"
            ]
        },
        "gazebo_msgs": {
            "ContactState": {
                "fields": {
                    "info": "string",
                    "collision1_name": "string",
                    "collision2_name": "string",
                    "wrenches": "geometry_msgs/Wrench[]",
                    "total_wrench": "geometry_msgs/Wrench",
                    "contact_positions": "geometry_msgs/Vector3[]",
                    "contact_normals": "geometry_msgs/Vector3[]",
                    "depths": "float64[]"
                },
                "constants": {}
            },
            "ContactsState": {
                "fields": {
                    "header": "Header",
                    "states": "gazebo_msgs/ContactState[]"
                },
                "constants": {}
            },
            "LinkState": {
                "fields": {
                    "link_name": "string",
                    "pose": "geometry_msgs/Pose",
                    "twist": "geometry_msgs/Twist",
                    "reference_frame": "string"
                },
                "constants": {}
            },
            "LinkStates": {
                "fields": {
                    "name": "string[]",
                    "pose": "geometry_msgs/Pose[]",
                    "twist": "geometry_msgs/Twist[]"
                },
                "constants": {}
            },
            "ModelState": {
                "fields": {
                    "model_name": "string",
                    "pose": "geometry_msgs/Pose",
                    "twist": "geometry_msgs/Twist",
                    "reference_frame": "string"
                },
                "constants": {}
            },
            "ModelStates": {
                "fields": {
                    "name": "string[]",
                    "pose": "geometry_msgs/Pose[]",
                    "twist": "geometry_msgs/Twist[]"
                },
                "constants": {}
            },
            "ODEJointProperties": {
                "fields": {
                    "damping": "float64[]",
                    "hiStop": "float64[]",
                    "loStop": "float64[]",
                    "erp": "float64[]",
                    "cfm": "float64[]",
                    "stop_erp": "float64[]",
                    "stop_cfm": "float64[]",
                    "fudge_factor": "float64[]",
                    "fmax": "float64[]",
                    "vel": "float64[]"
                },
                "constants": {}
            },
            "ODEPhysics": {
                "fields": {
                    "auto_disable_bodies": "bool",
                    "sor_pgs_precon_iters": "uint32",
                    "sor_pgs_iters": "uint32",
                    "sor_pgs_rms_error_tol": "float64",
                    "contact_surface_layer": "float64",
                    "contact_max_correcting_vel": "float64",
                    "cfm": "float64",
                    "erp": "float64",
                    "max_contacts": "uint32"
                },
                "constants": {
                    "sor_pgs_w": null
                }
            },
            "WorldState": {
                "fields": {
                    "header": "Header",
                    "name": "string[]",
                    "pose": "geometry_msgs/Pose[]",
                    "twist": "geometry_msgs/Twist[]",
                    "wrench": "geometry_msgs/Wrench[]"
                },
                "constants": {}
            },
            "dependsOn": [
                "geometry_msgs",
                "sensor_msgs",
                "trajectory_msgs",
                "std_msgs",
                "std_srvs",
                "message_generation",
                "geometry_msgs",
                "sensor_msgs",
                "trajectory_msgs",
                "std_msgs",
                "message_runtime",
                "std_srvs"
            ]
        },
        "geometry_msgs": {
            "Accel": {
                "fields": {
                    "linear": "Vector3",
                    "angular": "Vector3"
                },
                "constants": {}
            },
            "AccelStamped": {
                "fields": {
                    "header": "Header",
                    "accel": "Accel"
                },
                "constants": {}
            },
            "AccelWithCovariance": {
                "fields": {
                    "accel": "Accel",
                    "covariance": "float64[36]"
                },
                "constants": {}
            },
            "AccelWithCovarianceStamped": {
                "fields": {
                    "header": "Header",
                    "accel": "AccelWithCovariance"
                },
                "constants": {}
            },
            "Inertia": {
                "fields": {
                    "m": "float64",
                    "com": "geometry_msgs/Vector3",
                    "ixx": "float64",
                    "ixy": "float64",
                    "ixz": "float64",
                    "iyy": "float64",
                    "iyz": "float64",
                    "izz": "float64"
                },
                "constants": {}
            },
            "InertiaStamped": {
                "fields": {
                    "header": "Header",
                    "inertia": "Inertia"
                },
                "constants": {}
            },
            "Point": {
                "fields": {
                    "x": "float64",
                    "y": "float64",
                    "z": "float64"
                },
                "constants": {}
            },
            "Point32": {
                "fields": {
                    "x": "float32",
                    "y": "float32",
                    "z": "float32"
                },
                "constants": {}
            },
            "PointStamped": {
                "fields": {
                    "header": "Header",
                    "point": "Point"
                },
                "constants": {}
            },
            "Polygon": {
                "fields": {
                    "points": "Point32[]"
                },
                "constants": {}
            },
            "PolygonStamped": {
                "fields": {
                    "header": "Header",
                    "polygon": "Polygon"
                },
                "constants": {}
            },
            "Pose": {
                "fields": {
                    "position": "Point",
                    "orientation": "Quaternion"
                },
                "constants": {}
            },
            "Pose2D": {
                "fields": {
                    "x": "float64",
                    "y": "float64",
                    "theta": "float64"
                },
                "constants": {}
            },
            "PoseArray": {
                "fields": {
                    "header": "Header",
                    "poses": "Pose[]"
                },
                "constants": {}
            },
            "PoseStamped": {
                "fields": {
                    "header": "Header",
                    "pose": "Pose"
                },
                "constants": {}
            },
            "PoseWithCovariance": {
                "fields": {
                    "pose": "Pose",
                    "covariance": "float64[36]"
                },
                "constants": {}
            },
            "PoseWithCovarianceStamped": {
                "fields": {
                    "header": "Header",
                    "pose": "PoseWithCovariance"
                },
                "constants": {}
            },
            "Quaternion": {
                "fields": {
                    "x": "float64",
                    "y": "float64",
                    "z": "float64",
                    "w": "float64"
                },
                "constants": {}
            },
            "QuaternionStamped": {
                "fields": {
                    "header": "Header",
                    "quaternion": "Quaternion"
                },
                "constants": {}
            },
            "Transform": {
                "fields": {
                    "translation": "Vector3",
                    "rotation": "Quaternion"
                },
                "constants": {}
            },
            "TransformStamped": {
                "fields": {
                    "header": "Header",
                    "child_frame_id": "string",
                    "transform": "Transform"
                },
                "constants": {}
            },
            "Twist": {
                "fields": {
                    "linear": "Vector3",
                    "angular": "Vector3"
                },
                "constants": {}
            },
            "TwistStamped": {
                "fields": {
                    "header": "Header",
                    "twist": "Twist"
                },
                "constants": {}
            },
            "TwistWithCovariance": {
                "fields": {
                    "twist": "Twist",
                    "covariance": "float64[36]"
                },
                "constants": {}
            },
            "TwistWithCovarianceStamped": {
                "fields": {
                    "header": "Header",
                    "twist": "TwistWithCovariance"
                },
                "constants": {}
            },
            "Vector3": {
                "fields": {
                    "x": "float64",
                    "y": "float64",
                    "z": "float64"
                },
                "constants": {}
            },
            "Vector3Stamped": {
                "fields": {
                    "header": "Header",
                    "vector": "Vector3"
                },
                "constants": {}
            },
            "Wrench": {
                "fields": {
                    "force": "Vector3",
                    "torque": "Vector3"
                },
                "constants": {}
            },
            "WrenchStamped": {
                "fields": {
                    "header": "Header",
                    "wrench": "Wrench"
                },
                "constants": {}
            },
            "dependsOn": [
                "message_generation",
                "std_msgs"
            ]
        },
        "map_msgs": {
            "OccupancyGridUpdate": {
                "fields": {
                    "header": "Header",
                    "x": "int32",
                    "y": "int32",
                    "width": "uint32",
                    "height": "uint32",
                    "data": "int8[]"
                },
                "constants": {}
            },
            "PointCloud2Update": {
                "fields": {
                    "header": "Header",
                    "type": "uint32",
                    "points": "sensor_msgs/PointCloud2"
                },
                "constants": {
                    "ADD": 0,
                    "DELETE": 1
                }
            },
            "ProjectedMap": {
                "fields": {
                    "map": "nav_msgs/OccupancyGrid",
                    "min_z": "float64",
                    "max_z": "float64"
                },
                "constants": {}
            },
            "ProjectedMapInfo": {
                "fields": {
                    "frame_id": "string",
                    "x": "float64",
                    "y": "float64",
                    "width": "float64",
                    "height": "float64",
                    "min_z": "float64",
                    "max_z": "float64"
                },
                "constants": {}
            },
            "dependsOn": [
                "message_generation",
                "std_msgs",
                "sensor_msgs",
                "nav_msgs"
            ]
        },
        "move_base_msgs": {
            "MoveBaseAction": {
                "fields": {
                    "action_goal": "MoveBaseActionGoal",
                    "action_result": "MoveBaseActionResult",
                    "action_feedback": "MoveBaseActionFeedback"
                },
                "constants": {}
            },
            "MoveBaseActionFeedback": {
                "fields": {
                    "header": "Header",
                    "status": "actionlib_msgs/GoalStatus",
                    "feedback": "MoveBaseFeedback"
                },
                "constants": {}
            },
            "MoveBaseActionGoal": {
                "fields": {
                    "header": "Header",
                    "goal_id": "actionlib_msgs/GoalID",
                    "goal": "MoveBaseGoal"
                },
                "constants": {}
            },
            "MoveBaseActionResult": {
                "fields": {
                    "header": "Header",
                    "status": "actionlib_msgs/GoalStatus",
                    "result": "MoveBaseResult"
                },
                "constants": {}
            },
            "MoveBaseFeedback": {
                "fields": {
                    "base_position": "geometry_msgs/PoseStamped"
                },
                "constants": {}
            },
            "MoveBaseGoal": {
                "fields": {
                    "target_pose": "geometry_msgs/PoseStamped"
                },
                "constants": {}
            },
            "MoveBaseResult": {
                "fields": {},
                "constants": {}
            },
            "dependsOn": [
                "actionlib_msgs",
                "geometry_msgs",
                "message_generation"
            ]
        },
        "nav_msgs": {
            "GetMapAction": {
                "fields": {
                    "action_goal": "GetMapActionGoal",
                    "action_result": "GetMapActionResult",
                    "action_feedback": "GetMapActionFeedback"
                },
                "constants": {}
            },
            "GetMapActionFeedback": {
                "fields": {
                    "header": "Header",
                    "status": "actionlib_msgs/GoalStatus",
                    "feedback": "GetMapFeedback"
                },
                "constants": {}
            },
            "GetMapActionGoal": {
                "fields": {
                    "header": "Header",
                    "goal_id": "actionlib_msgs/GoalID",
                    "goal": "GetMapGoal"
                },
                "constants": {}
            },
            "GetMapActionResult": {
                "fields": {
                    "header": "Header",
                    "status": "actionlib_msgs/GoalStatus",
                    "result": "GetMapResult"
                },
                "constants": {}
            },
            "GetMapFeedback": {
                "fields": {},
                "constants": {}
            },
            "GetMapGoal": {
                "fields": {},
                "constants": {}
            },
            "GetMapResult": {
                "fields": {
                    "map": "nav_msgs/OccupancyGrid"
                },
                "constants": {}
            },
            "GridCells": {
                "fields": {
                    "header": "Header",
                    "cell_width": "float32",
                    "cell_height": "float32",
                    "cells": "geometry_msgs/Point[]"
                },
                "constants": {}
            },
            "MapMetaData": {
                "fields": {
                    "map_load_time": "time",
                    "resolution": "float32",
                    "width": "uint32",
                    "height": "uint32",
                    "origin": "geometry_msgs/Pose"
                },
                "constants": {}
            },
            "OccupancyGrid": {
                "fields": {
                    "header": "Header",
                    "info": "MapMetaData",
                    "data": "int8[]"
                },
                "constants": {}
            },
            "Odometry": {
                "fields": {
                    "header": "Header",
                    "child_frame_id": "string",
                    "pose": "geometry_msgs/PoseWithCovariance",
                    "twist": "geometry_msgs/TwistWithCovariance"
                },
                "constants": {}
            },
            "Path": {
                "fields": {
                    "header": "Header",
                    "poses": "geometry_msgs/PoseStamped[]"
                },
                "constants": {}
            },
            "dependsOn": [
                "geometry_msgs",
                "message_generation",
                "std_msgs",
                "actionlib_msgs"
            ]
        },
        "pcl_msgs": {
            "ModelCoefficients": {
                "fields": {
                    "header": "Header",
                    "values": "float32[]"
                },
                "constants": {}
            },
            "PointIndices": {
                "fields": {
                    "header": "Header",
                    "indices": "int32[]"
                },
                "constants": {}
            },
            "PolygonMesh": {
                "fields": {
                    "header": "Header",
                    "cloud": "sensor_msgs/PointCloud2",
                    "polygons": "Vertices[]"
                },
                "constants": {}
            },
            "Vertices": {
                "fields": {
                    "vertices": "uint32[]"
                },
                "constants": {}
            },
            "dependsOn": [
                "message_generation",
                "sensor_msgs",
                "std_msgs"
            ]
        },
        "rosapi": {
            "TypeDef": {
                "fields": {
                    "type": "string",
                    "fieldnames": "string[]",
                    "fieldtypes": "string[]",
                    "fieldarraylen": "int32[]",
                    "examples": "string[]",
                    "constnames": "string[]",
                    "constvalues": "string[]"
                },
                "constants": {}
            },
            "dependsOn": [
                "message_generation",
                "rosbridge_library",
                "rospy",
                "rosnode",
                "rosgraph",
                "message_runtime"
            ]
        },
        "rosbridge_msgs": {
            "ConnectedClient": {
                "fields": {
                    "ip_address": "string",
                    "connection_time": "time"
                },
                "constants": {}
            },
            "ConnectedClients": {
                "fields": {
                    "clients": "ConnectedClient[]"
                },
                "constants": {}
            },
            "dependsOn": [
                "message_generation",
                "message_runtime",
                "message_runtime"
            ]
        },
        "roscpp": {
            "Logger": {
                "fields": {
                    "name": "string",
                    "level": "string"
                },
                "constants": {}
            },
            "dependsOn": [
                "cpp_common",
                "message_generation",
                "pkg-config",
                "rosconsole",
                "roscpp_serialization",
                "roscpp_traits",
                "rosgraph_msgs",
                "roslang",
                "rostime",
                "std_msgs",
                "xmlrpcpp"
            ]
        },
        "rosgraph_msgs": {
            "Clock": {
                "fields": {
                    "clock": "time"
                },
                "constants": {}
            },
            "Log": {
                "fields": {
                    "header": "Header",
                    "level": "byte",
                    "name": "string",
                    "msg": "string",
                    "file": "string",
                    "function": "string",
                    "line": "uint32",
                    "topics": "string[]"
                },
                "constants": {
                    "DEBUG": 1,
                    "INFO": 2,
                    "WARN": 4,
                    "ERROR": 8,
                    "FATAL": 16
                }
            },
            "TopicStatistics": {
                "fields": {
                    "topic": "string",
                    "node_pub": "string",
                    "node_sub": "string",
                    "window_start": "time",
                    "window_stop": "time",
                    "delivered_msgs": "int32",
                    "dropped_msgs": "int32",
                    "traffic": "int32",
                    "period_mean": "duration",
                    "period_stddev": "duration",
                    "period_max": "duration",
                    "stamp_age_mean": "duration",
                    "stamp_age_stddev": "duration",
                    "stamp_age_max": "duration"
                },
                "constants": {}
            },
            "dependsOn": [
                "message_generation",
                "std_msgs"
            ]
        },
        "rospy_tutorials": {
            "Floats": {
                "fields": {
                    "data": "float32[]"
                },
                "constants": {}
            },
            "HeaderString": {
                "fields": {
                    "header": "Header",
                    "data": "string"
                },
                "constants": {}
            },
            "dependsOn": [
                "message_generation",
                "rostest",
                "std_msgs"
            ]
        },
        "rosserial_msgs": {
            "Log": {
                "fields": {
                    "level": "uint8",
                    "msg": "string"
                },
                "constants": {
                    "ROSDEBUG": 0,
                    "INFO": 1,
                    "WARN": 2,
                    "ERROR": 3,
                    "FATAL": 4
                }
            },
            "TopicInfo": {
                "fields": {
                    "topic_id": "uint16",
                    "topic_name": "string",
                    "message_type": "string",
                    "md5sum": "string",
                    "buffer_size": "int32"
                },
                "constants": {
                    "ID_PUBLISHER": 0,
                    "ID_SUBSCRIBER": 1,
                    "ID_SERVICE_SERVER": 2,
                    "ID_SERVICE_CLIENT": 4,
                    "ID_PARAMETER_REQUEST": 6,
                    "ID_LOG": 7,
                    "ID_TIME": 10,
                    "ID_TX_STOP": 11
                }
            },
            "dependsOn": [
                "message_generation"
            ]
        },
        "sensor_msgs": {
            "BatteryState": {
                "fields": {
                    "header": "Header",
                    "voltage": "float32",
                    "current": "float32",
                    "charge": "float32",
                    "capacity": "float32",
                    "design_capacity": "float32",
                    "percentage": "float32",
                    "power_supply_status": "uint8",
                    "power_supply_health": "uint8",
                    "power_supply_technology": "uint8",
                    "present": "bool",
                    "cell_voltage": "float32[]",
                    "location": "string",
                    "serial_number": "string"
                },
                "constants": {
                    "POWER_SUPPLY_STATUS_UNKNOWN": 0,
                    "POWER_SUPPLY_STATUS_CHARGING": 1,
                    "POWER_SUPPLY_STATUS_DISCHARGING": 2,
                    "POWER_SUPPLY_STATUS_NOT_CHARGING": 3,
                    "POWER_SUPPLY_STATUS_FULL": 4,
                    "POWER_SUPPLY_HEALTH_UNKNOWN": 0,
                    "POWER_SUPPLY_HEALTH_GOOD": 1,
                    "POWER_SUPPLY_HEALTH_OVERHEAT": 2,
                    "POWER_SUPPLY_HEALTH_DEAD": 3,
                    "POWER_SUPPLY_HEALTH_OVERVOLTAGE": 4,
                    "POWER_SUPPLY_HEALTH_UNSPEC_FAILURE": 5,
                    "POWER_SUPPLY_HEALTH_COLD": 6,
                    "POWER_SUPPLY_HEALTH_WATCHDOG_TIMER_EXPIRE": 7,
                    "POWER_SUPPLY_HEALTH_SAFETY_TIMER_EXPIRE": 8,
                    "POWER_SUPPLY_TECHNOLOGY_UNKNOWN": 0,
                    "POWER_SUPPLY_TECHNOLOGY_NIMH": 1,
                    "POWER_SUPPLY_TECHNOLOGY_LION": 2,
                    "POWER_SUPPLY_TECHNOLOGY_LIPO": 3,
                    "POWER_SUPPLY_TECHNOLOGY_LIFE": 4,
                    "POWER_SUPPLY_TECHNOLOGY_NICD": 5,
                    "POWER_SUPPLY_TECHNOLOGY_LIMN": 6
                }
            },
            "CameraInfo": {
                "fields": {
                    "header": "Header",
                    "height": "uint32",
                    "width": "uint32",
                    "distortion_model": "string",
                    "D": "float64[]",
                    "K": "float64[9]",
                    "R": "float64[9]",
                    "P": "float64[12]",
                    "binning_x": "uint32",
                    "binning_y": "uint32",
                    "roi": "RegionOfInterest"
                },
                "constants": {}
            },
            "ChannelFloat32": {
                "fields": {
                    "name": "string",
                    "values": "float32[]"
                },
                "constants": {}
            },
            "CompressedImage": {
                "fields": {
                    "header": "Header",
                    "format": "string",
                    "data": "uint8[]"
                },
                "constants": {}
            },
            "FluidPressure": {
                "fields": {
                    "header": "Header",
                    "fluid_pressure": "float64",
                    "variance": "float64"
                },
                "constants": {}
            },
            "Illuminance": {
                "fields": {
                    "header": "Header",
                    "illuminance": "float64",
                    "variance": "float64"
                },
                "constants": {}
            },
            "Image": {
                "fields": {
                    "header": "Header",
                    "height": "uint32",
                    "width": "uint32",
                    "encoding": "string",
                    "is_bigendian": "uint8",
                    "step": "uint32",
                    "data": "uint8[]"
                },
                "constants": {}
            },
            "Imu": {
                "fields": {
                    "header": "Header",
                    "orientation": "geometry_msgs/Quaternion",
                    "orientation_covariance": "float64[9]",
                    "angular_velocity": "geometry_msgs/Vector3",
                    "angular_velocity_covariance": "float64[9]",
                    "linear_acceleration": "geometry_msgs/Vector3",
                    "linear_acceleration_covariance": "float64[9]"
                },
                "constants": {}
            },
            "JointState": {
                "fields": {
                    "header": "Header",
                    "name": "string[]",
                    "position": "float64[]",
                    "velocity": "float64[]",
                    "effort": "float64[]"
                },
                "constants": {}
            },
            "Joy": {
                "fields": {
                    "header": "Header",
                    "axes": "float32[]",
                    "buttons": "int32[]"
                },
                "constants": {}
            },
            "JoyFeedback": {
                "fields": {
                    "type": "uint8",
                    "id": "uint8",
                    "intensity": "float32"
                },
                "constants": {
                    "TYPE_LED": 0,
                    "TYPE_RUMBLE": 1,
                    "TYPE_BUZZER": 2
                }
            },
            "JoyFeedbackArray": {
                "fields": {
                    "array": "JoyFeedback[]"
                },
                "constants": {}
            },
            "LaserEcho": {
                "fields": {
                    "echoes": "float32[]"
                },
                "constants": {}
            },
            "LaserScan": {
                "fields": {
                    "header": "Header",
                    "": "Header",
                    "angle_min": "float32",
                    "angle_max": "float32",
                    "angle_increment": "float32",
                    "time_increment": "float32",
                    "scan_time": "float32",
                    "range_min": "float32",
                    "range_max": "float32",
                    "ranges": "float32[]",
                    "intensities": "float32[]"
                },
                "constants": {}
            },
            "MagneticField": {
                "fields": {
                    "header": "Header",
                    "magnetic_field": "geometry_msgs/Vector3",
                    "magnetic_field_covariance": "float64[9]"
                },
                "constants": {}
            },
            "MultiDOFJointState": {
                "fields": {
                    "header": "Header",
                    "joint_names": "string[]",
                    "transforms": "geometry_msgs/Transform[]",
                    "twist": "geometry_msgs/Twist[]",
                    "wrench": "geometry_msgs/Wrench[]"
                },
                "constants": {}
            },
            "MultiEchoLaserScan": {
                "fields": {
                    "header": "Header",
                    "": "Header",
                    "angle_min": "float32",
                    "angle_max": "float32",
                    "angle_increment": "float32",
                    "time_increment": "float32",
                    "scan_time": "float32",
                    "range_min": "float32",
                    "range_max": "float32",
                    "ranges": "LaserEcho[]",
                    "intensities": "LaserEcho[]"
                },
                "constants": {}
            },
            "NavSatFix": {
                "fields": {
                    "header": "Header",
                    "status": "NavSatStatus",
                    "latitude": "float64",
                    "longitude": "float64",
                    "altitude": "float64",
                    "position_covariance": "float64[9]",
                    "position_covariance_type": "uint8"
                },
                "constants": {
                    "COVARIANCE_TYPE_UNKNOWN": 0,
                    "COVARIANCE_TYPE_APPROXIMATED": 1,
                    "COVARIANCE_TYPE_DIAGONAL_KNOWN": 2,
                    "COVARIANCE_TYPE_KNOWN": 3
                }
            },
            "NavSatStatus": {
                "fields": {
                    "status": "int8",
                    "service": "uint16"
                },
                "constants": {
                    "STATUS_NO_FIX": -1,
                    "STATUS_FIX": 0,
                    "STATUS_SBAS_FIX": 1,
                    "STATUS_GBAS_FIX": 2,
                    "SERVICE_GPS": 1,
                    "SERVICE_GLONASS": 2,
                    "SERVICE_COMPASS": 4,
                    "SERVICE_GALILEO": 8
                }
            },
            "PointCloud": {
                "fields": {
                    "header": "Header",
                    "points": "geometry_msgs/Point32[]",
                    "channels": "ChannelFloat32[]"
                },
                "constants": {}
            },
            "PointCloud2": {
                "fields": {
                    "header": "Header",
                    "height": "uint32",
                    "width": "uint32",
                    "fields": "PointField[]",
                    "is_bigendian": "bool",
                    "point_step": "uint32",
                    "row_step": "uint32",
                    "data": "uint8[]",
                    "is_dense": "bool"
                },
                "constants": {}
            },
            "PointField": {
                "fields": {
                    "name": "string",
                    "offset": "uint32",
                    "datatype": "uint8",
                    "count": "uint32"
                },
                "constants": {
                    "INT8": 1,
                    "UINT8": 2,
                    "INT16": 3,
                    "UINT16": 4,
                    "INT32": 5,
                    "UINT32": 6,
                    "FLOAT32": 7,
                    "FLOAT64": 8
                }
            },
            "Range": {
                "fields": {
                    "header": "Header",
                    "radiation_type": "uint8",
                    "field_of_view": "float32",
                    "min_range": "float32",
                    "max_range": "float32",
                    "range": "float32"
                },
                "constants": {
                    "ULTRASOUND": 0,
                    "INFRARED": 1
                }
            },
            "RegionOfInterest": {
                "fields": {
                    "x_offset": "uint32",
                    "y_offset": "uint32",
                    "height": "uint32",
                    "width": "uint32",
                    "do_rectify": "bool"
                },
                "constants": {}
            },
            "RelativeHumidity": {
                "fields": {
                    "header": "Header",
                    "relative_humidity": "float64",
                    "variance": "float64"
                },
                "constants": {}
            },
            "Temperature": {
                "fields": {
                    "header": "Header",
                    "temperature": "float64",
                    "variance": "float64"
                },
                "constants": {}
            },
            "TimeReference": {
                "fields": {
                    "header": "Header",
                    "time_ref": "time",
                    "source": "string"
                },
                "constants": {}
            },
            "dependsOn": [
                "geometry_msgs",
                "message_generation",
                "std_msgs"
            ]
        },
        "shape_msgs": {
            "Mesh": {
                "fields": {
                    "triangles": "MeshTriangle[]",
                    "vertices": "geometry_msgs/Point[]"
                },
                "constants": {}
            },
            "MeshTriangle": {
                "fields": {
                    "vertex_indices": "uint32[3]"
                },
                "constants": {}
            },
            "Plane": {
                "fields": {
                    "coef": "float64[4]"
                },
                "constants": {}
            },
            "SolidPrimitive": {
                "fields": {
                    "type": "uint8",
                    "dimensions": "float64[]"
                },
                "constants": {
                    "BOX": 1,
                    "SPHERE": 2,
                    "CYLINDER": 3,
                    "CONE": 4,
                    "BOX_X": 0,
                    "BOX_Y": 1,
                    "BOX_Z": 2,
                    "SPHERE_RADIUS": 0,
                    "CYLINDER_HEIGHT": 0,
                    "CYLINDER_RADIUS": 1,
                    "CONE_HEIGHT": 0,
                    "CONE_RADIUS": 1
                }
            },
            "dependsOn": [
                "geometry_msgs",
                "message_generation",
                "std_msgs"
            ]
        },
        "smach_msgs": {
            "SmachContainerInitialStatusCmd": {
                "fields": {
                    "path": "string",
                    "initial_states": "string[]",
                    "local_data": "string"
                },
                "constants": {}
            },
            "SmachContainerStatus": {
                "fields": {
                    "header": "Header",
                    "path": "string",
                    "initial_states": "string[]",
                    "active_states": "string[]",
                    "local_data": "string",
                    "info": "string"
                },
                "constants": {}
            },
            "SmachContainerStructure": {
                "fields": {
                    "header": "Header",
                    "path": "string",
                    "children": "string[]",
                    "internal_outcomes": "string[]",
                    "outcomes_from": "string[]",
                    "outcomes_to": "string[]",
                    "container_outcomes": "string[]"
                },
                "constants": {}
            },
            "dependsOn": [
                "message_generation",
                "message_runtime",
                "message_runtime"
            ]
        },
        "std_msgs": {
            "Bool": {
                "fields": {
                    "data": "bool"
                },
                "constants": {}
            },
            "Byte": {
                "fields": {
                    "data": "byte"
                },
                "constants": {}
            },
            "ByteMultiArray": {
                "fields": {
                    "layout": "MultiArrayLayout",
                    "data": "byte[]"
                },
                "constants": {}
            },
            "Char": {
                "fields": {
                    "data": "char"
                },
                "constants": {}
            },
            "ColorRGBA": {
                "fields": {
                    "r": "float32",
                    "g": "float32",
                    "b": "float32",
                    "a": "float32"
                },
                "constants": {}
            },
            "Duration": {
                "fields": {
                    "data": "duration"
                },
                "constants": {}
            },
            "Empty": {
                "fields": {},
                "constants": {}
            },
            "Float32": {
                "fields": {
                    "data": "float32"
                },
                "constants": {}
            },
            "Float32MultiArray": {
                "fields": {
                    "layout": "MultiArrayLayout",
                    "data": "float32[]"
                },
                "constants": {}
            },
            "Float64": {
                "fields": {
                    "data": "float64"
                },
                "constants": {}
            },
            "Float64MultiArray": {
                "fields": {
                    "layout": "MultiArrayLayout",
                    "data": "float64[]"
                },
                "constants": {}
            },
            "Header": {
                "fields": {
                    "seq": "uint32",
                    "stamp": "time",
                    "frame_id": "string"
                },
                "constants": {}
            },
            "Int16": {
                "fields": {
                    "data": "int16"
                },
                "constants": {}
            },
            "Int16MultiArray": {
                "fields": {
                    "layout": "MultiArrayLayout",
                    "data": "int16[]"
                },
                "constants": {}
            },
            "Int32": {
                "fields": {
                    "data": "int32"
                },
                "constants": {}
            },
            "Int32MultiArray": {
                "fields": {
                    "layout": "MultiArrayLayout",
                    "data": "int32[]"
                },
                "constants": {}
            },
            "Int64": {
                "fields": {
                    "data": "int64"
                },
                "constants": {}
            },
            "Int64MultiArray": {
                "fields": {
                    "layout": "MultiArrayLayout",
                    "data": "int64[]"
                },
                "constants": {}
            },
            "Int8": {
                "fields": {
                    "data": "int8"
                },
                "constants": {}
            },
            "Int8MultiArray": {
                "fields": {
                    "layout": "MultiArrayLayout",
                    "data": "int8[]"
                },
                "constants": {}
            },
            "MultiArrayDimension": {
                "fields": {
                    "label": "string",
                    "size": "uint32",
                    "stride": "uint32"
                },
                "constants": {}
            },
            "MultiArrayLayout": {
                "fields": {
                    "dim": "MultiArrayDimension[]",
                    "data_offset": "uint32"
                },
                "constants": {}
            },
            "String": {
                "fields": {
                    "data": "string"
                },
                "constants": {}
            },
            "Time": {
                "fields": {
                    "data": "time"
                },
                "constants": {}
            },
            "UInt16": {
                "fields": {
                    "data": "uint16"
                },
                "constants": {}
            },
            "UInt16MultiArray": {
                "fields": {
                    "layout": "MultiArrayLayout",
                    "data": "uint16[]"
                },
                "constants": {}
            },
            "UInt32": {
                "fields": {
                    "data": "uint32"
                },
                "constants": {}
            },
            "UInt32MultiArray": {
                "fields": {
                    "layout": "MultiArrayLayout",
                    "data": "uint32[]"
                },
                "constants": {}
            },
            "UInt64": {
                "fields": {
                    "data": "uint64"
                },
                "constants": {}
            },
            "UInt64MultiArray": {
                "fields": {
                    "layout": "MultiArrayLayout",
                    "data": "uint64[]"
                },
                "constants": {}
            },
            "UInt8": {
                "fields": {
                    "data": "uint8"
                },
                "constants": {}
            },
            "UInt8MultiArray": {
                "fields": {
                    "layout": "MultiArrayLayout",
                    "data": "uint8[]"
                },
                "constants": {}
            },
            "dependsOn": [
                "message_generation"
            ]
        },
        "stereo_msgs": {
            "DisparityImage": {
                "fields": {
                    "header": "Header",
                    "image": "sensor_msgs/Image",
                    "f": "float32",
                    "T": "float32",
                    "valid_window": "sensor_msgs/RegionOfInterest",
                    "min_disparity": "float32",
                    "max_disparity": "float32",
                    "delta_d": "float32"
                },
                "constants": {}
            },
            "dependsOn": [
                "message_generation",
                "sensor_msgs",
                "std_msgs"
            ]
        },
        "tf": {
            "tfMessage": {
                "fields": {
                    "transforms": "geometry_msgs/TransformStamped[]"
                },
                "constants": {}
            },
            "dependsOn": [
                "angles",
                "geometry_msgs",
                "message_filters",
                "message_generation",
                "rosconsole",
                "roscpp",
                "rostime",
                "sensor_msgs",
                "std_msgs",
                "tf2_ros"
            ]
        },
        "tf2_msgs": {
            "LookupTransformAction": {
                "fields": {
                    "action_goal": "LookupTransformActionGoal",
                    "action_result": "LookupTransformActionResult",
                    "action_feedback": "LookupTransformActionFeedback"
                },
                "constants": {}
            },
            "LookupTransformActionFeedback": {
                "fields": {
                    "header": "Header",
                    "status": "actionlib_msgs/GoalStatus",
                    "feedback": "LookupTransformFeedback"
                },
                "constants": {}
            },
            "LookupTransformActionGoal": {
                "fields": {
                    "header": "Header",
                    "goal_id": "actionlib_msgs/GoalID",
                    "goal": "LookupTransformGoal"
                },
                "constants": {}
            },
            "LookupTransformActionResult": {
                "fields": {
                    "header": "Header",
                    "status": "actionlib_msgs/GoalStatus",
                    "result": "LookupTransformResult"
                },
                "constants": {}
            },
            "LookupTransformFeedback": {
                "fields": {},
                "constants": {}
            },
            "LookupTransformGoal": {
                "fields": {
                    "target_frame": "string",
                    "source_frame": "string",
                    "source_time": "time",
                    "timeout": "duration",
                    "target_time": "time",
                    "fixed_frame": "string",
                    "advanced": "bool"
                },
                "constants": {}
            },
            "LookupTransformResult": {
                "fields": {
                    "transform": "geometry_msgs/TransformStamped",
                    "error": "tf2_msgs/TF2Error"
                },
                "constants": {}
            },
            "TF2Error": {
                "fields": {
                    "error": "uint8",
                    "error_string": "string"
                },
                "constants": {
                    "NO_ERROR": 0,
                    "LOOKUP_ERROR": 1,
                    "CONNECTIVITY_ERROR": 2,
                    "EXTRAPOLATION_ERROR": 3,
                    "INVALID_ARGUMENT_ERROR": 4,
                    "TIMEOUT_ERROR": 5,
                    "TRANSFORM_ERROR": 6
                }
            },
            "TFMessage": {
                "fields": {
                    "transforms": "geometry_msgs/TransformStamped[]"
                },
                "constants": {}
            },
            "dependsOn": [
                "actionlib_msgs",
                "geometry_msgs",
                "message_generation"
            ]
        },
        "theora_image_transport": {
            "Packet": {
                "fields": {
                    "header": "Header",
                    "data": "uint8[]",
                    "b_o_s": "int32",
                    "e_o_s": "int32",
                    "granulepos": "int64",
                    "packetno": "int64"
                },
                "constants": {}
            },
            "dependsOn": [
                "cv_bridge",
                "dynamic_reconfigure",
                "image_transport",
                "libogg",
                "libtheora",
                "message_generation",
                "pluginlib",
                "rosbag",
                "std_msgs"
            ]
        },
        "trajectory_msgs": {
            "JointTrajectory": {
                "fields": {
                    "header": "Header",
                    "joint_names": "string[]",
                    "points": "JointTrajectoryPoint[]"
                },
                "constants": {}
            },
            "JointTrajectoryPoint": {
                "fields": {
                    "positions": "float64[]",
                    "velocities": "float64[]",
                    "accelerations": "float64[]",
                    "effort": "float64[]",
                    "time_from_start": "duration"
                },
                "constants": {}
            },
            "MultiDOFJointTrajectory": {
                "fields": {
                    "header": "Header",
                    "joint_names": "string[]",
                    "points": "MultiDOFJointTrajectoryPoint[]"
                },
                "constants": {}
            },
            "MultiDOFJointTrajectoryPoint": {
                "fields": {
                    "transforms": "geometry_msgs/Transform[]",
                    "velocities": "geometry_msgs/Twist[]",
                    "accelerations": "geometry_msgs/Twist[]",
                    "time_from_start": "duration"
                },
                "constants": {}
            },
            "dependsOn": [
                "message_generation",
                "geometry_msgs",
                "std_msgs"
            ]
        },
        "turtle_actionlib": {
            "ShapeAction": {
                "fields": {
                    "action_goal": "ShapeActionGoal",
                    "action_result": "ShapeActionResult",
                    "action_feedback": "ShapeActionFeedback"
                },
                "constants": {}
            },
            "ShapeActionFeedback": {
                "fields": {
                    "header": "Header",
                    "status": "actionlib_msgs/GoalStatus",
                    "feedback": "ShapeFeedback"
                },
                "constants": {}
            },
            "ShapeActionGoal": {
                "fields": {
                    "header": "Header",
                    "goal_id": "actionlib_msgs/GoalID",
                    "goal": "ShapeGoal"
                },
                "constants": {}
            },
            "ShapeActionResult": {
                "fields": {
                    "header": "Header",
                    "status": "actionlib_msgs/GoalStatus",
                    "result": "ShapeResult"
                },
                "constants": {}
            },
            "ShapeFeedback": {
                "fields": {},
                "constants": {}
            },
            "ShapeGoal": {
                "fields": {
                    "edges": "int32",
                    "radius": "float32"
                },
                "constants": {}
            },
            "ShapeResult": {
                "fields": {
                    "interior_angle": "float32",
                    "apothem": "float32"
                },
                "constants": {}
            },
            "Velocity": {
                "fields": {
                    "linear": "float32",
                    "angular": "float32"
                },
                "constants": {}
            },
            "dependsOn": [
                "actionlib",
                "actionlib_msgs",
                "angles",
                "message_generation",
                "rosconsole",
                "roscpp",
                "std_msgs",
                "turtlesim",
                "geometry_msgs"
            ]
        },
        "turtlesim": {
            "Color": {
                "fields": {
                    "r": "uint8",
                    "g": "uint8",
                    "b": "uint8"
                },
                "constants": {}
            },
            "Pose": {
                "fields": {
                    "x": "float32",
                    "y": "float32",
                    "theta": "float32",
                    "linear_velocity": "float32",
                    "angular_velocity": "float32"
                },
                "constants": {}
            },
            "dependsOn": [
                "geometry_msgs",
                "qtbase5-dev",
                "message_generation",
                "qt5-qmake",
                "rosconsole",
                "roscpp",
                "roscpp_serialization",
                "roslib",
                "rostime",
                "std_msgs",
                "std_srvs"
            ]
        },
        "visualization_msgs": {
            "ImageMarker": {
                "fields": {
                    "header": "Header",
                    "ns": "string",
                    "id": "int32",
                    "type": "int32",
                    "action": "int32",
                    "position": "geometry_msgs/Point",
                    "scale": "float32",
                    "outline_color": "std_msgs/ColorRGBA",
                    "filled": "uint8",
                    "fill_color": "std_msgs/ColorRGBA",
                    "lifetime": "duration",
                    "points": "geometry_msgs/Point[]",
                    "outline_colors": "std_msgs/ColorRGBA[]"
                },
                "constants": {
                    "CIRCLE": 0,
                    "LINE_STRIP": 1,
                    "LINE_LIST": 2,
                    "POLYGON": 3,
                    "POINTS": 4,
                    "ADD": 0,
                    "REMOVE": 1
                }
            },
            "InteractiveMarker": {
                "fields": {
                    "header": "Header",
                    "pose": "geometry_msgs/Pose",
                    "name": "string",
                    "description": "string",
                    "scale": "float32",
                    "menu_entries": "MenuEntry[]",
                    "controls": "InteractiveMarkerControl[]"
                },
                "constants": {}
            },
            "InteractiveMarkerControl": {
                "fields": {
                    "name": "string",
                    "orientation": "geometry_msgs/Quaternion",
                    "orientation_mode": "uint8",
                    "interaction_mode": "uint8",
                    "always_visible": "bool",
                    "markers": "Marker[]",
                    "independent_marker_orientation": "bool",
                    "description": "string"
                },
                "constants": {
                    "INHERIT": 0,
                    "FIXED": 1,
                    "VIEW_FACING": 2,
                    "NONE": 0,
                    "MENU": 1,
                    "BUTTON": 2,
                    "MOVE_AXIS": 3,
                    "MOVE_PLANE": 4,
                    "ROTATE_AXIS": 5,
                    "MOVE_ROTATE": 6,
                    "MOVE_3D": 7,
                    "ROTATE_3D": 8,
                    "MOVE_ROTATE_3D": 9
                }
            },
            "InteractiveMarkerFeedback": {
                "fields": {
                    "header": "Header",
                    "client_id": "string",
                    "marker_name": "string",
                    "control_name": "string",
                    "event_type": "uint8",
                    "pose": "geometry_msgs/Pose",
                    "menu_entry_id": "uint32",
                    "mouse_point": "geometry_msgs/Point",
                    "mouse_point_valid": "bool"
                },
                "constants": {
                    "KEEP_ALIVE": 0,
                    "POSE_UPDATE": 1,
                    "MENU_SELECT": 2,
                    "BUTTON_CLICK": 3,
                    "MOUSE_DOWN": 4,
                    "MOUSE_UP": 5
                }
            },
            "InteractiveMarkerInit": {
                "fields": {
                    "server_id": "string",
                    "seq_num": "uint64",
                    "markers": "InteractiveMarker[]"
                },
                "constants": {}
            },
            "InteractiveMarkerPose": {
                "fields": {
                    "header": "Header",
                    "pose": "geometry_msgs/Pose",
                    "name": "string"
                },
                "constants": {}
            },
            "InteractiveMarkerUpdate": {
                "fields": {
                    "server_id": "string",
                    "seq_num": "uint64",
                    "type": "uint8",
                    "markers": "InteractiveMarker[]",
                    "poses": "InteractiveMarkerPose[]",
                    "erases": "string[]"
                },
                "constants": {
                    "KEEP_ALIVE": 0,
                    "UPDATE": 1
                }
            },
            "Marker": {
                "fields": {
                    "header": "Header",
                    "ns": "string",
                    "id": "int32",
                    "type": "int32",
                    "action": "int32",
                    "pose": "geometry_msgs/Pose",
                    "scale": "geometry_msgs/Vector3",
                    "color": "std_msgs/ColorRGBA",
                    "lifetime": "duration",
                    "frame_locked": "bool",
                    "points": "geometry_msgs/Point[]",
                    "colors": "std_msgs/ColorRGBA[]",
                    "text": "string",
                    "mesh_resource": "string",
                    "mesh_use_embedded_materials": "bool"
                },
                "constants": {
                    "ARROW": 0,
                    "CUBE": 1,
                    "SPHERE": 2,
                    "CYLINDER": 3,
                    "LINE_STRIP": 4,
                    "LINE_LIST": 5,
                    "CUBE_LIST": 6,
                    "SPHERE_LIST": 7,
                    "POINTS": 8,
                    "TEXT_VIEW_FACING": 9,
                    "MESH_RESOURCE": 10,
                    "TRIANGLE_LIST": 11,
                    "ADD": 0,
                    "MODIFY": 0,
                    "DELETE": 2,
                    "DELETEALL": 3
                }
            },
            "MarkerArray": {
                "fields": {
                    "markers": "Marker[]"
                },
                "constants": {}
            },
            "MenuEntry": {
                "fields": {
                    "id": "uint32",
                    "parent_id": "uint32",
                    "title": "string",
                    "command": "string",
                    "command_type": "uint8"
                },
                "constants": {
                    "FEEDBACK": 0,
                    "ROSRUN": 1,
                    "ROSLAUNCH": 2
                }
            },
            "dependsOn": [
                "geometry_msgs",
                "message_generation",
                "std_msgs"
            ]
        }
    },
    "DEP": {}
}